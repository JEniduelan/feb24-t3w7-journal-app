# Journal App

## Routes 

- `localhost:3000/` 
	- root or homepage 
	- Welcome screen 
	- Journal entry form / "comment box"
	- List the entries 
		- latest 5 entries? 
- `localhost:3000/entries/:entryId/`
	- View and edit individual journal entries by their entryId
	- "edit in place" for journal entry data
		- toggle between read-only and an editable form 
- `localhost:3000/search/:searchKey/:searchValue`
 - how a list oif journal entries where each entry matches the searchParam
 - 


 ```js
 {
    id:"123456789",
    type:"review",
    name:"Example post name",
    content:"Some cool content goes here.",
    Author:"John",
    lastEdited:123456789 // milliseconds since JS dates are stored as that internally
 }
 ```