const CURRENT_URL = window.location.href;

const BASIC_URL = 'chrome://net-internals/#';
const DNS_ARCH = 'dns';
const SOCKETS_ARCH = 'sockets';

location.assign(BASIC_URL + DNS_ARCH);
document.querySelector('#dns-view-clear-cache').click();

location.assign(BASIC_URL + SOCKETS_ARCH);
document.querySelector('#sockets-view-flush-button').click();

location.assign(CURRENT_URL);