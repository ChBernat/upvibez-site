(function () {
  var VENUES = [
    {
      name: 'Grand Hotel',
      rooms: [
        {
          name: 'Lobby',
          devices: ['Desktop, front desk'],
          cached: 7,
          blocks: [
            { start: 6, end: 11, state: 'scheduled', title: 'Lounge mix', type: 'Playlist', art: 'LM' },
            { start: 11, end: 11.5, state: 'silent' },
            { start: 11.5, end: 22, state: 'scheduled', title: 'Dinner set', type: 'Album', art: 'DS' },
            { start: 22, end: 24, state: 'silent' }
          ]
        },
        {
          name: 'Restaurant',
          devices: ['Tablet, host stand', 'Tablet, patio (backup)'],
          cached: 7,
          blocks: [
            { start: 6, end: 7, state: 'silent' },
            { start: 7, end: 23, state: 'scheduled', title: 'Golden hour', type: 'Playlist', art: 'GH' },
            { start: 23, end: 24, state: 'silent' }
          ]
        },
        {
          name: 'Spa',
          devices: ['Tablet, reception'],
          cached: 5,
          blocks: [
            { start: 6, end: 14, state: 'scheduled', title: 'Quiet mornings', type: 'Playlist', art: 'QM' },
            { start: 14, end: 24, state: 'silent' }
          ]
        }
      ]
    },
    {
      name: 'Riverside Inn',
      rooms: [
        {
          name: 'Lobby',
          devices: ['Desktop, front desk'],
          cached: 6,
          blocks: [
            { start: 6, end: 9, state: 'scheduled', title: 'Morning lounge', type: 'Playlist', art: 'ML' },
            { start: 9, end: 17, state: 'silent' },
            { start: 17, end: 24, state: 'scheduled', title: 'Nightfall', type: 'Track', art: 'NF' }
          ]
        },
        {
          name: 'Bar',
          devices: ['Tablet, bar'],
          cached: 4,
          blocks: [
            { start: 6, end: 16, state: 'silent' },
            { start: 16, end: 24, state: 'scheduled', title: 'Late night', type: 'Album', art: 'LN' }
          ]
        }
      ]
    }
  ];

  var NOW_HOUR = 14;
  var TIMELINE_START_HOUR = 6;
  var PX_PER_HOUR = 40;
  var TIMELINE_X0 = 110;

  function hourToX(h) {
    return TIMELINE_X0 + (h - TIMELINE_START_HOUR) * PX_PER_HOUR;
  }

  function hourLabel(h) {
    var hh = Math.floor(h);
    var mm = Math.round((h - hh) * 60);
    return String(hh).padStart(2, '0') + ':' + String(mm).padStart(2, '0');
  }

  function findBlockIndexAt(blocks, hour) {
    var idx = blocks.findIndex(function (b) { return hour >= b.start && hour < b.end; });
    return idx === -1 ? 0 : idx;
  }

  function tabsHtml(items, selectedIndex, kind) {
    var cls = kind === 'venue' ? 'app-mock__venue' : 'app-mock__room';
    return items.map(function (item, i) {
      return '<button type="button" class="' + cls + '" aria-pressed="' + (i === selectedIndex) + '" data-' + kind + '="' + i + '">' + item.name + '</button>';
    }).join('');
  }

  /* Scheduler */

  var schedulerState = { venue: 0, room: 0, block: null };

  function renderSchedulerBlocks(room) {
    var parts = [];
    room.blocks.forEach(function (b, i) {
      var x = hourToX(b.start);
      var width = (b.end - b.start) * PX_PER_HOUR;
      var cls = b.state === 'scheduled' ? 'block block-scheduled' : 'block block-silent';
      if (b.state === 'scheduled' && b.title) {
        parts.push('<text class="grid-label" x="' + (x + 4) + '" y="30">' + b.title + '</text>');
      }
      parts.push('<rect class="' + cls + '" data-block="' + i + '" style="--d:' + i + '" x="' + x + '" y="34" width="' + width + '" height="32" rx="3"></rect>');
    });
    var nowX = hourToX(NOW_HOUR);
    parts.push('<line class="now-line" x1="' + nowX + '" y1="18" x2="' + nowX + '" y2="92"></line>');
    return parts.join('');
  }

  function renderSchedulerDetail(room, blockIndex) {
    var b = room.blocks[blockIndex];
    var timeRange = hourLabel(b.start) + ' to ' + hourLabel(b.end);
    var detail = document.getElementById('scheduler-detail');
    if (b.state === 'scheduled') {
      detail.innerHTML =
        '<span class="cover-tile" aria-hidden="true">' + b.art + '</span>' +
        '<div>' +
        '<p class="meta dim">' + b.type + '</p>' +
        '<p class="block-detail__title">' + b.title + '</p>' +
        '<p class="meta dim">' + timeRange + '</p>' +
        '</div>';
    } else {
      detail.innerHTML =
        '<div>' +
        '<p class="meta dim">Silent</p>' +
        '<p class="block-detail__title">No slot scheduled</p>' +
        '<p class="meta dim">' + timeRange + '</p>' +
        '</div>';
    }
  }

  function rowStateHtml(b) {
    if (b.state === 'silent') return '<span class="state-chip">Silent</span>';
    if (NOW_HOUR >= b.start && NOW_HOUR < b.end) return '<span class="state-chip chip-playing">Playing</span>';
    if (b.end <= NOW_HOUR) return '<span class="state-chip">Played</span>';
    return '<span class="state-chip chip-scheduled">Scheduled</span>';
  }

  function renderScheduleTable(room) {
    var body = document.getElementById('scheduler-table-body');
    if (!body) return;
    body.innerHTML = room.blocks.map(function (b) {
      var plays = b.state === 'silent'
        ? '<span class="schedule-table__title">Silent</span>'
        : '<span class="schedule-table__title">' + b.title + '</span><span class="schedule-table__type">' + b.type + '</span>';
      return '<tr>' +
        '<td>' + hourLabel(b.start) + '–' + hourLabel(b.end) + '</td>' +
        '<td>' + plays + '</td>' +
        '<td>' + rowStateHtml(b) + '</td>' +
        '</tr>';
    }).join('');
  }

  function renderScheduler() {
    var venue = VENUES[schedulerState.venue];
    var room = venue.rooms[schedulerState.room];
    if (schedulerState.block === null || schedulerState.block >= room.blocks.length) {
      schedulerState.block = findBlockIndexAt(room.blocks, NOW_HOUR);
    }
    document.getElementById('scheduler-venues').innerHTML = tabsHtml(VENUES, schedulerState.venue, 'venue');
    document.getElementById('scheduler-rooms').innerHTML = tabsHtml(venue.rooms, schedulerState.room, 'room');
    document.getElementById('scheduler-dynamic').innerHTML = renderSchedulerBlocks(room);
    renderSchedulerDetail(room, schedulerState.block);
    renderScheduleTable(room);
  }

  var schedulerVenuesEl = document.getElementById('scheduler-venues');
  var schedulerRoomsEl = document.getElementById('scheduler-rooms');
  var schedulerDynamicEl = document.getElementById('scheduler-dynamic');

  if (schedulerVenuesEl) {
    schedulerVenuesEl.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-venue]');
      if (!btn) return;
      schedulerState.venue = Number(btn.dataset.venue);
      schedulerState.room = 0;
      schedulerState.block = null;
      renderScheduler();
    });

    schedulerRoomsEl.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-room]');
      if (!btn) return;
      schedulerState.room = Number(btn.dataset.room);
      schedulerState.block = null;
      renderScheduler();
    });

    schedulerDynamicEl.addEventListener('click', function (e) {
      var rect = e.target.closest('[data-block]');
      if (!rect) return;
      schedulerState.block = Number(rect.dataset.block);
      var venue = VENUES[schedulerState.venue];
      var room = venue.rooms[schedulerState.room];
      renderSchedulerDetail(room, schedulerState.block);
    });

    renderScheduler();
  }

  /* Composer */

  var WEEKDAY_LABELS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  var MONTH_LABELS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  function dateKey(y, m, d) {
    return y + '-' + String(m + 1).padStart(2, '0') + '-' + String(d).padStart(2, '0');
  }

  var today = new Date();
  var calendarState = {
    year: today.getFullYear(),
    month: today.getMonth(),
    selected: dateKey(today.getFullYear(), today.getMonth(), today.getDate())
  };

  function renderCalendar() {
    var el = document.getElementById('composer-calendar');
    if (!el) return;

    var y = calendarState.year;
    var m = calendarState.month;
    var firstDay = new Date(y, m, 1);
    var startOffset = (firstDay.getDay() + 6) % 7; // Monday-first
    var daysInMonth = new Date(y, m + 1, 0).getDate();
    var todayKey = dateKey(today.getFullYear(), today.getMonth(), today.getDate());

    var cells = [];
    for (var i = 0; i < startOffset; i++) {
      cells.push('<span></span>');
    }
    for (var d = 1; d <= daysInMonth; d++) {
      var key = dateKey(y, m, d);
      var classes = 'calendar__day';
      if (key === todayKey) classes += ' is-today';
      if (key === calendarState.selected) classes += ' is-selected';
      cells.push('<button type="button" class="' + classes + '" data-date="' + key + '">' + d + '</button>');
    }

    el.innerHTML =
      '<div class="calendar__header">' +
      '<button type="button" class="calendar__nav" data-cal="prev" aria-label="Previous month">‹</button>' +
      '<p class="meta dim calendar__title">' + MONTH_LABELS[m] + ' ' + y + '</p>' +
      '<button type="button" class="calendar__nav" data-cal="next" aria-label="Next month">›</button>' +
      '</div>' +
      '<div class="calendar__weekdays">' + WEEKDAY_LABELS.map(function (w) { return '<span>' + w + '</span>'; }).join('') + '</div>' +
      '<div class="calendar__days">' + cells.join('') + '</div>';
  }

  function timeToHours(value) {
    var parts = value.split(':');
    return Number(parts[0]) + Number(parts[1]) / 60;
  }

  function trackInitials(name) {
    var words = name.split(' ').filter(Boolean);
    if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
    return (words[0][0] + words[1][0]).toUpperCase();
  }

  function insertBlock(blocks, newBlock) {
    var result = [];
    blocks.forEach(function (b) {
      if (b.end <= newBlock.start || b.start >= newBlock.end) {
        result.push(b);
        return;
      }
      if (b.start < newBlock.start) {
        result.push({ start: b.start, end: newBlock.start, state: b.state, title: b.title, type: b.type, art: b.art });
      }
      if (b.end > newBlock.end) {
        result.push({ start: newBlock.end, end: b.end, state: b.state, title: b.title, type: b.type, art: b.art });
      }
    });
    result.push(newBlock);
    result.sort(function (a, b) { return a.start - b.start; });
    return result;
  }

  var calendarEl = document.getElementById('composer-calendar');
  var modalEl = document.getElementById('composer-modal');

  if (calendarEl && modalEl) {
    calendarEl.addEventListener('click', function (e) {
      var navBtn = e.target.closest('button[data-cal]');
      if (navBtn) {
        calendarState.month += navBtn.dataset.cal === 'next' ? 1 : -1;
        if (calendarState.month < 0) { calendarState.month = 11; calendarState.year--; }
        if (calendarState.month > 11) { calendarState.month = 0; calendarState.year++; }
        renderCalendar();
        return;
      }
      var dayBtn = e.target.closest('button[data-date]');
      if (dayBtn) {
        calendarState.selected = dayBtn.dataset.date;
        renderCalendar();
      }
    });

    renderCalendar();

    var openBtn = document.getElementById('composer-open');
    var closeBtn = document.getElementById('composer-close');
    var cancelBtn = document.getElementById('composer-cancel');
    var addBtn = document.getElementById('composer-add');
    var hintEl = document.getElementById('composer-hint');

    openBtn.addEventListener('click', function () {
      hintEl.textContent = '';
      modalEl.showModal();
    });

    closeBtn.addEventListener('click', function () { modalEl.close(); });
    cancelBtn.addEventListener('click', function () { modalEl.close(); });

    modalEl.addEventListener('click', function (e) {
      var box = modalEl.getBoundingClientRect();
      var inside = e.clientX >= box.left && e.clientX <= box.right && e.clientY >= box.top && e.clientY <= box.bottom;
      if (!inside) modalEl.close();
    });

    addBtn.addEventListener('click', function () {
      var track = document.getElementById('composer-track').value;
      var startHour = timeToHours(document.getElementById('composer-start').value);
      var endHour = timeToHours(document.getElementById('composer-end').value);
      startHour = Math.max(TIMELINE_START_HOUR, Math.min(24, startHour));
      endHour = Math.max(TIMELINE_START_HOUR, Math.min(24, endHour));

      if (endHour <= startHour) {
        hintEl.textContent = 'End must be after start';
        return;
      }

      var room = VENUES[schedulerState.venue].rooms[schedulerState.room];
      var newBlock = { start: startHour, end: endHour, state: 'scheduled', title: track, type: 'Playlist', art: trackInitials(track) };
      room.blocks = insertBlock(room.blocks, newBlock);
      schedulerState.block = room.blocks.indexOf(newBlock);
      renderScheduler();
      modalEl.close();
    });
  }

  /* Player */

  var playerState = { venue: 0, room: 0 };

  function renderPlayer() {
    var venue = VENUES[playerState.venue];
    var room = venue.rooms[playerState.room];

    document.getElementById('player-venues').innerHTML = tabsHtml(VENUES, playerState.venue, 'venue');
    document.getElementById('player-rooms').innerHTML = tabsHtml(venue.rooms, playerState.room, 'room');

    var blockIndex = findBlockIndexAt(room.blocks, NOW_HOUR);
    var b = room.blocks[blockIndex];
    var isPlaying = b.state === 'scheduled';

    var devicesHtml = room.devices.map(function (d) {
      return '<span class="state-chip">' + d + '</span>';
    }).join('');

    var html = '<div class="device-row">' + devicesHtml + '</div>';

    if (isPlaying) {
      html +=
        '<div class="block-detail">' +
        '<span class="cover-tile" aria-hidden="true">' + b.art + '</span>' +
        '<div>' +
        '<p class="meta dim">Now playing</p>' +
        '<p class="player-mock__playlist">' + b.title + '</p>' +
        '<p class="meta dim">' + b.type + ', slot ends ' + hourLabel(b.end) + '</p>' +
        '</div>' +
        '</div>';
    } else {
      html +=
        '<div class="block-detail">' +
        '<div>' +
        '<p class="meta dim">No slot scheduled now</p>' +
        '<p class="player-mock__playlist">Silent</p>' +
        '</div>' +
        '</div>';
    }

    html +=
      '<div class="player-mock__status">' +
      (isPlaying ? '<span class="state-chip chip-playing">Playing</span>' : '<span class="state-chip">Silent</span>') +
      '<span class="state-chip chip-cached">Cached, ' + room.cached + ' days</span>' +
      '</div>';

    document.getElementById('player-mock').innerHTML = html;
  }

  var playerVenuesEl = document.getElementById('player-venues');
  var playerRoomsEl = document.getElementById('player-rooms');

  if (playerVenuesEl) {
    playerVenuesEl.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-venue]');
      if (!btn) return;
      playerState.venue = Number(btn.dataset.venue);
      playerState.room = 0;
      renderPlayer();
    });

    playerRoomsEl.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-room]');
      if (!btn) return;
      playerState.room = Number(btn.dataset.room);
      renderPlayer();
    });

    renderPlayer();
  }
})();
