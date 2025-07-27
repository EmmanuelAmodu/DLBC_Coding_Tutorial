/*Page header scrpt here*/
document.getElementById("app-header").innerHTML = 
"<head>"
    + "<meta charset='UTF-8'>"
    + "<meta name='viewport' content='width=device-width, initial-scale=1.0'>"
    + "<title>JS TUTORIAL</title>"
    + "<link rel='stylesheet' href='assets/styles.css'>"
+ "</head>";


/*Page navigation scrpt here*/
const appNav = `
    <nav>
        <div class="nav">
            <a href="index.html">Home</a>
        </div>
    </nav>
`;
document.getElementById("app-nav").innerHTML = appNav;

/*Page footer scrpt here*/
const footer = `
    <div class='footer'>    
        <a href='week1.html'>Week 1</a>
        <a href='week2.html'>Week 2</a>
        <a href='week3.html'>Week 3</a>
        <a href='week4.html'>Week 4</a>
    </div>
`;
document.getElementById("app-footer").innerHTML = footer;

/*Ion Icon script here 
const ionIcons = `
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
`;
document.getElementById("ionicon").innerHTML = ionIcons; */
