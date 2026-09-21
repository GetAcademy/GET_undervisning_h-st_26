function addUserView() {
  return /*HTML*/ `
        <div class="add-user-form">
            <h2>Add new user</h2>
            <form id="userForm">
                <div class="input-group">
                    <label for="userName">Name:</label>
                    <input 
                        id="userName"
                        type="text"
                        placeholder="Enter name"
                    >
                </div>
                <div class="input-group">
                    <label for="userEmail">Email:</label>
                    <input                     
                        type="email"
                        id="userEmail"
                        placeholder="Enter email"
                >
                </div>
                <button type="submit" class="add-user-btn" onclick="">Add user</button>
                <button type="submit" class="cancel-btn" onclick="">Cancel</button>
            </form>
        </div>
    `;
}
