function searchView() {
  return /*HTML*/ `
    <div class="controls">       
        <div class="search-container">
            <input 
                type="text" 
                class="search-box" 
                placeholder="Search users..." 
                value="${model.app.searchQuery}"
                oninput="model.viewState.search.query = this.value"
                onkeydown="if(event.key === 'Enter') search()"
                >  

                ${
                  model.app.searchQuery
                    ? /*HTML*/ `
                    <button class="clear-btn" onclick="clearSearch()">✕</button>
                    `
                    : ""
                }
        </div>
        <button class="search-btn" onclick="search()">Search</button>      
    </div>  
    `;
}
