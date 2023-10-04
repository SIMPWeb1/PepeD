function copyAddress() {
    navigator.clipboard.writeText("0x62059318f97B2DfB6E222e90E3b4A2E5c85AfFf2")
}

function onLinkClick(section) {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' })
    // will scroll to 4th h3 element
  }