function ResetClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const Min = String(now.getMinutes()).padStart(2, '0');
    const Sec = String(now.getSeconds()).padStart(2, '0');
    const Ms = String(now.getMilliseconds()).padStart(2, '0');

    const times = `${hours}:${Min}:${Sec}:${Ms}`;
    document.getElementById('clock').textContent = times;

    const options = { day: 'numeric', weekday: 'long', year: 'numeric', month: 'long', };
      const dateStr = now.toLocaleDateString('en-US', options);
      document.getElementById('date').textContent = dateStr;
  }

  setInterval(ResetClock, 1000);

  ResetClock();