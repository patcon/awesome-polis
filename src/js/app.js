const lunr = require('lunr')
const idx = lunr.Index.load(window.idx)
const search = document.getElementById('search')

const cards = Array.from(document.querySelectorAll('.Card'))
  .sort((a, b) => {
    const aId = parseInt(a.dataset.ref)
    const bId = parseInt(b.dataset.ref)

    if (aId < bId) {
      return -1
    }
    if (aId > bId) {
      return 1
    }

    return 0
  })

function randomizr () {
  const cards = document.querySelector('.CardContainer')
  for (var i = cards.children.length; i >= 0; i--) {
    cards.appendChild(cards.children[Math.random() * i | 0])
  }
}

function update (display) {
  cards.forEach((c) => {
    if (display.indexOf(c.dataset.ref) >= 0) {
      c.classList.remove('dn')
      c.classList.add('dib')
    } else {
      c.classList.add('dn')
      c.classList.remove('dib')
    }
  })
}

randomizr()

if (search) {
  search.classList.remove('dn')
  const input = search.querySelector('input')

  function setSearchParam(searchParam) {
    // Update the URL without adding to the search history
    const newurl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?q=${encodeURIComponent(searchParam)}`
    window.history.replaceState({path: newurl}, '', newurl)
  }

  // Function to handle search logic
  function handleSearch(searchValue) {
    setSearchParam(searchValue)

    if (searchValue === '') {
      cards.forEach((c) => c.classList.remove('dn'))
      return
    }

    if (!searchValue.endsWith('*')) {
      searchValue = `${searchValue} ${searchValue}*`
    }

    try {
      update(idx.search(searchValue).map(s => s.ref))
    } catch (e) {
      console.log(e)
    }
  }

  // Parse the URL and get the 'q' query parameter
  const params = new URLSearchParams(window.location.search)
  const query = params.get('q')
  if (query) {
    input.value = query // Set the input value to the 'q' parameter
    handleSearch(query)
  }

  input.addEventListener('keyup', () => {
    handleSearch(input.value)
  })
}
