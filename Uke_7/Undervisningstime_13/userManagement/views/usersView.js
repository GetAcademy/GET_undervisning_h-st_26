function usersView() {
  return /*HTML*/ `
        <div class="user-list">
            <h2>
                User List 
                <button class="plus-btn" onclick="setPage('addUser')">+</button>
            </h2>  
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${createUserRows()}
                </tbody>
            </table>
        </div>
    `;
}

function createUserRows() {
  let html = "";

  return html;
}
