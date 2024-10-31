// fonction pour ajout/enregistrement des utilisateurs(clients)
function signup() {
  // recuperation desn donnee
  var firstName = getValue("firstName");
  var lastName = getValue("lastName");
  var tel =getValue("tel"); 
  var email = getValue("email");
  var password = getValue("pwd");
  var confirmPwd = getValue("confirmPwd");
  // validation ou controle de saisie
  var isFNValid = checkLength(firstName, 4);
  generateValidateSignup(isFNValid,"firstNameError","FN should have at least 4 carc ");
 
  var isLNValid = checkLength(lastName, 3);
  generateValidateSignup(isLNValid,"lastNameError","LN should have at least 3 carc ");
 
  var telValid = checkTel(tel, 8);
  generateValidateSignup(telValid ,"telError","Tel should have at 8 number ");
 
  var passwordValid = checkLength(password, 6);
  generateValidateSignup(passwordValid ,"passwordError","PWD should have at least 6 carc ");
 
  var confirmPwdValid = checkPwd(password, confirmPwd);
  generateValidateSignup(confirmPwdValid ,"pwdConfirmError","check pwd");
 
  // récuperation de données des utilisateur et stockage dans un tableau
  var usersTab = getLsByKey("users")
  // si tous les controle de saisie est vrai on passe a la création de l'objet
  if (isFNValid && confirmPwdValid && isLNValid && passwordValid && telValid) {
    // création de l'objet
    var user = {
      id: generateId(usersTab) + 1,
      fnUser: firstName,
      lnUser: lastName,
      telUser: tel,
      emailUser: email,
      pwdUser: password,
      confirmationUser: confirmPwd,
      role: "client",
    };
    //enregistrer dans LS
    // var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
    usersTab.push(user);
    SetLsByKeyAndTabObjet("users",usersTab);
    location.replace("login.html");
  }
}
function signupStore() {
   // recuperation desn donnee
   var firstName = getValue("firstNameStore");
   var lastName = getValue("lastNameStore");
   var tel = getValue("telStore");
   var email = getValue("emailStore");
   var password = getValue("pwdStore");
   var address = getValue("addressStore");
   var nameStore = getValue("nameStore");
   // validation ou controle de saisie
   var isFNValid = checkLength(firstName, 4);
   generateValidateSignup(isFNValid,"firstNameStoreError","FN should have at least 4 carc ");
   
   var isLNValid = checkLength(lastName, 3);
   generateValidateSignup(isLNValid,"lastNameStoreError","LN should have at least 3 carc ");
   
   var telValid = checkTel(tel, 8);
   generateValidateSignup(telValid ,"telStoreError","Tel should have at 8 number ");
   
   var passwordValid = checkLength(password, 6);
   generateValidateSignup(passwordValid ,"passwordStoreError","PWD should have at least 6 carc ");
  
   
   var isAdressValid = checkLength(address, 10);
   generateValidateSignup(isAdressValid ,"AddressStoreError","Address should have at least 10 carc ");
  
   var isNameStoreValid = checkLength(nameStore, 4);
   generateValidateSignup(isNameStoreValid ,"nameStoreError","Name store should have at least 4 carc ");
  
   // récuperation de données des utilisateur et stockage dans un tableau
   var usersTab = getLsByKey("users");
   // si tous les controle de saisie est vrai on passe a la création de l'objet
   if (isFNValid  && isLNValid && passwordValid && telValid && isNameStoreValid && isAdressValid ) {
     // création de l'objet
     var user = {
       id: generateId(usersTab) + 1,
       fnUser: firstName,
       lnUser: lastName,
       telUser: tel,
       emailUser: email,
       pwdUser: password,
       role: "store",
       addressStore:address,
       nameStore:nameStore,
       status:"NOK"

     };
     //enregistrer dans LS
     // var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
     usersTab.push(user);
     SetLsByKeyAndTabObjet("users",usersTab);
     location.replace("login.html");
   }
}
function signupAdmin() {
   // recuperation desn donnee
   var firstName =getValue("firstNameAdmin"); 
   var lastName = getValue("lastNameAdmin");
   var email = getValue("emailAdmin");
   var password = getValue("pwdAdmin");
   // validation ou controle de saisie
   var isFNValid = checkLength(firstName, 4);
   generateValidateSignup(isFNValid,"firstNameAdminError","FN should have at least 4 carc ");
   var isLNValid = checkLength(lastName, 4);
   generateValidateSignup(isLNValid,"lastNameAdminError","LN should have at least 4 carc ");
   var passwordValid = checkLength(password, 6);
   generateValidateSignup(passwordValid ,"passwordAdminError","PWD should have at least 6 carc ");
   // récuperation de données des utilisateur et stockage dans un tableau
   var usersTab = getLsByKey("users");
   // si tous les controle de saisie est vrai on passe a la création de l'objet
   if (isFNValid  && isLNValid && passwordValid ) {
     // création de l'objet
     var user = {
       id: generateId(usersTab) + 1,
       fnUser: firstName,
       lnUser: lastName,
       emailUser: email,
       pwdUser: password,
       role: "admin",
     };
     //enregistrer dans LS
     // var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
     usersTab.push(user);
     SetLsByKeyAndTabObjet("users",usersTab);
     location.replace("login.html");
   }
}
function generateValidateSignup(a,id,ch) {
  if (a == false) {
    document.getElementById(id).innerHTML =
      ch;
  } else {
    document.getElementById(id).innerHTML = " ";
  }
}
// fonction pour la validation de longeur d'une chaine
function checkLength(ch, nb) {
  return ch.length >= nb;
}
// fonction pour la validation de numéro du télephone
function checkTel(ch, nb) {
  return ch.length == nb;
}
// fonction pour la verification d'identité de mot de passe
function checkPwd(ch, ch1) {
  return ch == ch1;
}

// fonction pour le connexion de l'utilisateur
function login() {
  // récuperation des données
  var email = getValue("mail"); 
  var password = getValue("password"); 
  // recuperation de l'objet users stocké dans localstorage
  var tabLogin = getLsByKey("users");
  // création d'un objet vide
  var findedUser;
  // parcourir de tableau pour le verification d'email et password
  for (var i = 0; i < tabLogin.length; i++) {
    // si vrai
    if (tabLogin[i].emailUser == email && tabLogin[i].pwdUser == password) {
      // stocké dans le variable findedUser
      findedUser = tabLogin[i];
      // stop de boucle pour s'il trouve la méme email et password d'un utilisateur
      break;
    }
  }
if (findedUser) {
  if ( findedUser.role=="client") {
    // for (var i = 0; i < tabLogin.length; i++) {
    //   // Si on trouve l'utilisateur correspondant à findedUser
    //   if (tabLogin[i].id === findedUser.id) {
    //     // Définir la propriété isConnected de cet utilisateur à true
    //     tabLogin[i].isConnected = true;
    //   }
    // }

    // Enregistrement de l'ID de l'utilisateur connecté dans le localStorage
    localStorage.setItem("displayedUserId", findedUser.id);
    // redirection vers la page productDetail.html
    window.location.replace("product.html");
  } 
  else if ( findedUser.role=="store") {
   if (findedUser.status=="NOK") {
    // message d'erreur
    document.getElementById("errorLogin").innerHTML ="Account not yet Validated";
    document.getElementById("errorLogin").style.color="red";
   } else {
    
      // Enregistrement de l'ID de l'utilisateur connecté dans le localStorage
    localStorage.setItem("displayedUserId", findedUser.id);
    // redirection vers la page productDetail.html
    window.location.replace("store.html");
   }

    
  }
  else  {
    

    // Enregistrement de l'ID de l'utilisateur connecté dans le localStorage
    localStorage.setItem("displayedUserId", findedUser.id);
    // redirection vers la page productDetail.html
    window.location.replace("admin.html");
  }
} 
 
  else {
    // message d'erreur
    document.getElementById("errorLogin").innerHTML =
      "Please check email and password";
  }
}
// function ajouter des produit
function addProduct() {
  // recuperation de l'id de l'utilisateur
  var connectedUserId = JSON.parse(localStorage.getItem("displayedUserId"));
  // recuperation desn donnee
  var name = getValue("name");
  var price = getValue("price");
  var stock = getValue("stock");
  var category = getValue("category");
  // controle de saisie ou validation
  var isNameValid = checkLength(name, 4);
  generateValidateSignup(isNameValid,"nameValid","Name should have at least 4 carc ");
 
  var isPriceValid = checkNumberPrice(price, 0);
  generateValidateSignup(isPriceValid,"priceValid","price should >0 ");
 
  var isStockvalid = checkNumberStock(stock, 0);
  generateValidateSignup(isStockvalid,"stockValid","stock should >0 ");
 
  // condition si tous les controle de saisie est vrai
  if (isNameValid && isPriceValid && isStockvalid) {
    // récuperation d'un tableau vide pour stocké les produit
    var productsTab = getLsByKey("products");
    // création de l'objet
    var product = {
      id: generateId(productsTab) + 1,
      idStore: connectedUserId ,
      nameProduct: name,
      priceProduct: price,
      stockProduct: stock,
      categoryProduct: category,
    };
    // var productsTab = JSON.parse(localStorage.getItem("products") || "[]");
    productsTab.push(product);
    SetLsByKeyAndTabObjet("products",productsTab);
  }
}
// fonction pour validation de prix d'un produit
function checkNumberPrice(n, nb) {
  return Number(n) > nb;
}
// fonction pour validation de stock d'un produit
function checkNumberStock(n, nb) {
  return Number(n) >= nb;
}
// fonction pour validation de prix d'un produit
function checkNumberPrice(n, nb) {
  return Number(n) > nb;
}
// fonction pour validation de stock d'un produit
function checkNumberStock(n, nb) {
  return Number(n) >= nb;
}
// fonction pour ajouter de façon dynamique lors de l'ajout d'un produit dans la page addProduct.html et sera afficher dans la page product.html
function displayProducts() {
  // récuperation des données de produit(addProduct.html) et stockage dans un tableau
  var tabProducts = getLsByKey("products");
  // declaration d'une chaine vide
  var content = "";
  // parcourir le tableau d'objet(produit)
  for (var i = 0; i < tabProducts.length; i++) {
    content =
      content +
      // division d'un seul produit trouvé dans la page product.html
      `<div class="col-lg-3 col-md-6">
    <div class="single-product">
      <img class="img-fluid" src="img/product/p1.jpg" alt="">
      <div class="product-details">
        <h6>${tabProducts[i].nameProduct}</h6>
        <div class="price">
          <h6>${tabProducts[i].priceProduct} DT</h6>
          <h6 class="l-through">$210.00</h6>
        </div>
        <div class="prd-bottom">

          <a href="" class="social-info">
            <span class="ti-bag"></span>
            <p class="hover-text">add to bag</p>
          </a>
          <a href="" class="social-info">
            <span class="lnr lnr-heart"></span>
            <p class="hover-text">Wishlist</p>
          </a>
          <a href="" class="social-info">
            <span class="lnr lnr-sync"></span>
            <p class="hover-text">compare</p>
          </a>
          <a href="" class="social-info">
            <span class="lnr lnr-move"></span>
            <p class="hover-text">view more</p>
          </a>
          <a  class="col-md-12 form-group">
					<a  class="primary-btn" href="#"  onclick="goToDisplayIdProduct(${tabProducts[i].id})"> Display </a>
				   
				</a>
        </div>
      </div>
    </div>
  </div>`;
  }
  // affichage de tous les produit ajoutée dans la page product.html
  document.getElementById("contentProduct").innerHTML = content;
}
// fonction pour lenregistrement d'un nouveau localstorage qui contient sauf l'id d'un produit et redirection du page produit.html vers la page productDetails.html
function goToDisplayIdProduct(idProduct) {
  // l'enregistrement d'un nouveau localstorage qui contient sauf l'id d'un produit
  localStorage.setItem("displayedProductId", idProduct);
  // redirection du page produit.html vers la page productDetails.html
  window.location.replace("productDetails.html");
}
// fonction pour manipuler les donnés d'un produit dans une page d'un seul produit
function displayProductDetails() {
  // récuperer l'id d'un produit a traver localstorage
  var tabId = JSON.parse(localStorage.getItem("displayedProductId"));
  // recuperer les données d'un produit lorsque l'id de produit chosi egal a un id des produits ajouter
  var findedProduct = getFromLsByIdAndKey(tabId, "products");
  // modifier les données des champs automatiquement a travers les données de produit
  document.getElementById("displayedPrName").innerHTML =
    findedProduct.nameProduct;
  document.getElementById("displayedPrPrice").innerHTML =
    findedProduct.priceProduct;
  // condition si le stock =0 seara afficher not avaible sinon afficher avaible
  if (findedProduct.stockProduct == 0) {
    document.getElementById("displayedPrStok").innerHTML = "Not Available";
  } else {
    document.getElementById("displayedPrStok").innerHTML = "Available";
  }

  document.getElementById("displayedPrCategory").innerHTML =
    findedProduct.categoryProduct;
}
// fonction pour ajouter un produit dans le panier

function addBasketProduct() {
  // récuperation des données
  var quantité = document.getElementById("qteProduct").value;
  // // récuperation de productId pour ajouter a l'objet order
  var tabProductId = JSON.parse(localStorage.getItem("displayedProductId"));
  // // récuperation de userId pour ajouter a l'objet order
  var userId = JSON.parse(localStorage.getItem("displayedUserId"));

  // verifier l'egalié de l'id de produit chosi et les ids de l'objet produit
  var product = getFromLsByIdAndKey(tabProductId, "products");
  // controle de saisie sur le champ quantité(qte doit etre superieur à 0 et inferieur à valeur du stock)
  if (Number(quantité) > 0 && Number(quantité) <= product.stockProduct) {
    // récuperation d'un tableau vide dans localsorage
    var tabOrders = getLsByKey("orders");
    // création de l'objet ordre
    var order = {
      id: generateId(tabOrders) + 1,
      idUser: userId,
      productId: tabProductId,
      productQuantité: quantité,
      statue: false,
    };
    // enregistrement d'un produit dans le localstorage via le basket
    tabOrders.push(order);
    SetLsByKeyAndTabObjet("orders",tabOrders);
    
    // si qté valid le message afficher dans html
    document.getElementById("errorQte").innerHTML = "order Added";
    // couleur vert de message si le qté valid
    document.getElementById("errorQte").style.color = "green";
    // appel de fonction de mise a jour du stock lorsque l'utilisateur passé  un commande
    // updateProductStock(tabProductId, quantité);
  } else {
    // si qté n'est pas valid le message afficher dans html
    document.getElementById("errorQte").innerHTML = "qty invalid";
    // couleur rouge de message si le qté n'est pas valid
    document.getElementById("errorQte").style.color = "red";
  }
}

// fonction pour ajouter des broduit au panier
function displayOrders() {
  //  récuperation de tableau d'objet (ordre)
  var tabOrders = getLsByKey("orders");
  // récuperation de l'id du l'utilisateur connecté
  var userId = JSON.parse(localStorage.getItem("displayedUserId"));
  // declaration d'une chaine vide
  var content = "";

  // parcourir le tableau d'objet(ordre)
  for (var i = 0; i < tabOrders.length; i++) {
    // condition pour l'id d'utilisateur pour ajouter les produit de maniere dynamique seulement de l'utilisateur connecté
    if (userId) {
      // verifier l'egalité l'id de produit de l objet ordre et l id de l'objet produit
      var tabProducts = getFromLsByIdAndKey(tabOrders[i].productId, "products");
      // price=qté*price
      var price =
        Number(tabOrders[i].productQuantité) * Number(tabProducts.priceProduct);
      content =
        content +
        // division d'un seul produit trouvé dans la page product.html
        `<tr>
      <td>
          <div class="media">
              <div class="d-flex">
                  <img src="img/cart.jpg" alt="">
              </div>
              <div class="media-body">
                  <p>${tabProducts.nameProduct}</p>
              </div>
          </div>
      </td>
      <td>
          <h5>${tabProducts.priceProduct} $</h5>
      </td>
      <td>
          <h5>${tabOrders[i].productQuantité}</h5>
      </td>
      <td>
          <h5>${price} $</h5>
      </td>
      <td>
          <h5>${tabOrders[i].statue ? "confirmer" : "Non confirmer"} </h5>
      </td>
      <td>
      <h5><button  type="button" class="btn btn-outline-danger" ${
        tabOrders[i].statue || Number(tabOrders[i].productQuantité) >
        Number(tabProducts.stockProduct) ? "disabled" : null
      } onclick="deleteObjByKeyAndId(${tabOrders[i].id},'${'orders'}')"><i class="fa fa-trash"></i></button></h5>
      
  </td>
  <td>
          <h5 class="text-${
            Number(tabOrders[i].productQuantité) <=
            Number(tabProducts.stockProduct)
              ? "success"
              : "danger"
          }">${
          Number(tabOrders[i].productQuantité) <=
          Number(tabProducts.stockProduct)
            ? "dispo"
            : "non dispo"
        }  </h5>
      </td>
  <td>
  <h5><button  type="button" class="btn btn-outline-success"  ${
    tabOrders[i].statue || Number(tabOrders[i].productQuantité) >
    Number(tabProducts.stockProduct) ? "disabled" : null
  }  onclick="confirmerOrder(${tabOrders[i].id},${
          tabProducts.stockProduct
        })"><i class="fa fa-check"></i></button></h5>
      
  </td>
 
      
  </tr>`;

      // affichage de tous les ordres ajoutée dans la page orders.html
      document.getElementById("displayOrders").innerHTML = content;
    }
  }
}
// fonction pour confirmer l'achat d'un ordre 
function confirmerOrder(id, stock) {
  // recuperation des orders via LS 
  var tabOrders = getLsByKey("orders");
  // parcour du tableau d'objet ordre
  for (var i = 0; i < tabOrders.length; i++) {
    // condition d'egalité des id et il faut que la quantité d'un ordre inferieur au stock du produit 
    if (
      tabOrders[i].id == id &&
      Number(tabOrders[i].productQuantité) <= Number(stock)
    ) {
      // l'achat est confirmer
      tabOrders[i].statue = true;
      // update du stock du produit 
      updateProductStock(tabOrders[i].productId, tabOrders[i].productQuantité);
      // mise a jour du tableau d'objet ordres dans LS
      SetLsByKeyAndTabObjet("orders",tabOrders);
      
      // reload automatique sur la meme page 
      location.reload();
     // stop du boucle 
      break;
    }
  }
}
// fonction pour diminuer la valeur de stock lorsque l'utilisateur ajouter une quantité de produit(nvstock=ancienstock-qte)
function updateProductStock(id, qte) {
  //  récuperation de tableau d'objet (produit)
  var tabProducts = getLsByKey("products");
  // parcourir tous l'objet du tableau tabProducts
  for (var i = 0; i < tabProducts.length; i++) {
    if (tabProducts[i].id == id) {
      // mise a jour du valeur de stock
      tabProducts[i].stockProduct =
        Number(tabProducts[i].stockProduct) - Number(qte);
    }
  }
  // enregistrement d'objet produit dans LS aprés le mise a jour du stock
  SetLsByKeyAndTabObjet("products",tabProducts);
  
}
// fonction pour afficher toutes les produit ajouté dans lS dans une page html 
function displayTableProduct() {
  // recuperation d'objet productus via LS
  var tabProducts = getLsByKey("products");
  // declaration d'une chaine vide
  var content = "";
  // parcour du tableau products 
  for (var i = 0; i < tabProducts.length; i++) {
    content =
      content +
      `<tr>
      <td>
    <h5>${tabProducts[i].id}</h5>
    </td>
    <td>
    <h5>${tabProducts[i].nameProduct}</h5>
    </td>
    <td>
    <h5>${tabProducts[i].categoryProduct}</h5>
    </td>
    <td>
    <h5>${tabProducts[i].priceProduct}</h5> 
    </td>
    <td>
    <h5>${tabProducts[i].stockProduct}</h5> 
    </td>
    <td>
    <h5><button  type="button" class="btn btn-outline-danger" onclick="deleteProductAdmin(${i})"><i class="fa fa-trash"></i></button></h5>
    <p></p>
    <h5><button  type="button" class="btn btn-outline-warning"  onclick="editProductAdmin(${tabProducts[i].id})"><i class="fa fa-edit"></i></button></h5>
    </td>
    
</tr>`;
  }
  // affichage du contenu de la chaine content dans la page TableProduct.html
  document.getElementById("displayTableProduct").innerHTML = content;
}
// fonction pour la suppression d'un produit par l'admin 
function deleteProductAdmin(pos) {
  // recuperation de toutes les produit via LS 
  var productsTab = getLsByKey("products");
  // suppression a partir de la position une seul element 
  productsTab.splice(pos, 1);
  // mise a jour de LS aprés suppression
  SetLsByKeyAndTabObjet("products",productsTab);
  
  // reload automatique
  location.reload();
}

// fonction pour afficher le partie header de maniere dynamique sur toutes les pages 
function generateHeader() {
  // recupération de l'id de l'utilisateur connecté
  var connectedUserId = JSON.parse(localStorage.getItem("displayedUserId"));
  // declaration d'une chaine vide
  var content=""
  // condition si l'utilisateur est connecté
if (connectedUserId) {
  // recuperation de user connecté a ce moment 
  var userconnected=getFromLsByIdAndKey(connectedUserId, "users");
  // si le role client on va effectuer des attribut specifique dans le header  
  if (userconnected.role=="client") {
    content=`<div class="main_menu">
  <nav class="navbar navbar-expand-lg navbar-light main_box">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <a class="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt=""></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
       aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
        <ul class="nav navbar-nav menu_nav ml-auto">
          <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="product.html">Products</a></li>
                        <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                        <li class="nav-item"><a class="nav-link" href="orders.html">Basket</a></li>
                        <li class="nav-item"><a class="nav-link" href="profile.html">Profile</a></li>
                        <li class="nav-item"><a class="nav-link" href="index.html" onclick="logOut()">LogOut</a></li>
        </ul>
        
      </div>
    </div>
  </nav>
</div>
`
document.getElementById("headerDiv").innerHTML=content;
}
// si le role store on va effectuer des attribut specifique dans le header 
else if (userconnected.role=="store") {
  content=`<div class="main_menu">
  <nav class="navbar navbar-expand-lg navbar-light main_box">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <a class="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt=""></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
       aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
        <ul class="nav navbar-nav menu_nav ml-auto">
          <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="store.html">Dashbord</a></li>
                        <li class="nav-item"><a class="nav-link" href="addProduct.html">Add Product</a></li>
                        
                        <li class="nav-item"><a class="nav-link" href="profile.html">Profile</a></li>
                        <li class="nav-item"><a class="nav-link" href="index.html" onclick="logOut()">LogOut</a></li>
        </ul>
        
      </div>
    </div>
  </nav>
</div>
`
document.getElementById("headerDiv").innerHTML=content;
}
// si le role admin on va effectuer des attribut specifique dans le header 
  else {
    content=`<div class="main_menu">
    <nav class="navbar navbar-expand-lg navbar-light main_box">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <a class="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt=""></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
          <ul class="nav navbar-nav menu_nav ml-auto">
            <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="admin.html">Dashboard</a></li>
                          <li class="nav-item"><a class="nav-link" href="profile.html">Hello Admin !</a></li>
                          <li class="nav-item"><a class="nav-link" href="index.html" onclick="logOut()">LogOut</a></li>
                          
          </ul>
          
        </div>
      </div>
    </nav>
  </div>
  `
  document.getElementById("headerDiv").innerHTML=content;
  }
  
 

  
} 
// si l'utilisateur n'a pas connecté on va effectuer des attribut specifique dans le header 
else  {
  content=`<div class="main_menu">
  <nav class="navbar navbar-expand-lg navbar-light main_box">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <a class="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt=""></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
       aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
        <ul class="nav navbar-nav menu_nav ml-auto">
          <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="product.html">Products</a></li>
                        <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                        <li class="nav-item">Are you : <a class="nav-link" href="signup.html">Client</a> or <a class="nav-link" href="signupStore.html">Store</a></li>
                        <li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
                        
        </ul>
        
      </div>
    </div>
  </nav>
</div>
`
// affichage de header selon le role 
document.getElementById("headerDiv").innerHTML=content;
}
  
}
// fonction deconnexion de l'utilisateur
function logOut() {
  localStorage.removeItem("displayedUserId");
  location.replace(index.html);
}
// fonction pour afficher les données d'un utilisateur (admin,client,store) dans une page html profile.html
function displayProfile() {
  // recuperation de l'id de l'utilisateur connecté
  var connectedUserId = JSON.parse(localStorage.getItem("displayedUserId"));
  // recuperation des données du l'utilisateur connecté
  var profile=getFromLsByIdAndKey(connectedUserId, "users");
  // declaration d'une chaine vide
  var content="";
  // condition si l'utilisateur connecté
  if (connectedUserId) {
    content=`<div class="col-lg-5">
    <div >
      
     
      <div >
        <img class="img-fluid-profile" src="img/user.jpg" alt="" />
      </div>
    </div>
  </div>
  <div class="col-lg-6 offset-lg-1" style="margin-left : 20px;">
    <div class="s_product_text"  >
    
      <h3><span>First Name</span> <span>:</span> <span style="color: rgb(214, 79, 30); font-size: medium; font-family: Verdana, Geneva, Tahoma, sans-serif;font-weight: bold; font-style: italic;">${profile.fnUser}</span></h3>
      <h3 style="margin-top : 25px;" ><span>Last Name</span> <span>:</span> <span style="color: rgb(214, 79, 30); font-size: medium; font-family: Verdana, Geneva, Tahoma, sans-serif;font-weight: bold; font-style: italic;" >${profile.lnUser}</span></h3>
      <h3 style="margin-top : 25px;"><span>Email : </span> <span style="color: rgb(214, 79, 30); font-size: medium; font-family: Verdana, Geneva, Tahoma, sans-serif;font-weight: bold; font-style: italic;">${profile.emailUser}</span></h3>
      <h3 style="margin-top : 25px;"> ${profile.role=="admin" ? "" : `Tel : <span style="color: rgb(214, 79, 30); font-size: medium; font-family: Verdana, Geneva, Tahoma, sans-serif;font-weight: bold; font-style: italic;">${profile.telUser} </span>
      `}</h3>
      <h3 style="margin-top : 25px;"> ${profile.role=="store" ?
       `Name Store : <span style="color: rgb(214, 79, 30); font-size: medium; font-family: Verdana, Geneva, Tahoma, sans-serif;font-weight: bold; font-style: italic;">${profile.nameStore
       }</span>` : ""}</h3>
      <h3 style="margin-top : 25px;"> ${profile.role=="store" ?
       `Address Store : <span style="color: rgb(214, 79, 30); font-size: medium; font-family: Verdana, Geneva, Tahoma, sans-serif;font-weight: bold; font-style: italic;">${profile.addressStore}</span>` : ""}</h3>
       
      <div class="card_area d-flex align-items-center">
        
        <a class="primary-btn" href="#" style="margin-top : 20px;" onclick="editProfileUser(${profile.id})" 
          >Edit profile</a
        >
      </div>
    </div>
  </div>`
  }
  // affichage de données de l'utlisateur dans la page profile.html
  document.getElementById("displayProfile").innerHTML=content;
}
function editProfileUser(id) {
  // declaration d'une chaine vide
  var form=``
  // recuperation du données du l'utilisateur connecté
  var user=getFromLsByIdAndKey(id, "users");
 if (user.role=="client") {
   // division d'un formulaire qui contient des inputs (information sur un utilisateur)
   form=`<div class="login_form_inner" style="padding-bottom : 70px">
   <h3>Edit profile</h3>
   <div class="row login_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
       
       <div class="col-md-12 form-group">
           <input type="text" class="form-control" id="newFirstNameEdit" name="" placeholder="" value="${user.fnUser
           }"  >
           
       </div>
       <div class="col-md-12 form-group">
           <input type="text" class="form-control" id="newLastNameEdit" name="" placeholder="" value="${user.lnUser}"  >
           
       </div>
       <div class="col-md-12 form-group">
       <input type="text" class="form-control" id="newEmailEdit" name="" placeholder="" value="${user.emailUser
       }"  >
       </div>
       <div class="col-md-12 form-group">
       <input type="text" class="form-control" id="newtelEdit" name="" placeholder="" value="${user.telUser
       }"  >
       </div>
       
   </div>
   
       
      
       
       
       <div class="col-md-12 form-group">
           <button type="submit" value="submit" class="primary-btn" style="border-radius: 5px; border: none;" onclick=""> Validate </button>
          
       </div>
       
   </div >`
   // affichage d'un formulaire dans la méme page profile.html qui contient les données du l'utilisateur connecté
   document.getElementById("editProfileUser").innerHTML=form;
 } else if (user.role=="store") {
  // division d'un formulaire qui contient des inputs (information sur un utilisateur)
  form=`<div class="login_form_inner">
  <h3>Edit profile</h3>
  <div class="row login_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
      
      <div class="col-md-12 form-group">
          <input type="text" class="form-control" id="newFirstNameEdit" name="" placeholder="" value="${user.fnUser
          }"  >
          
      </div>
      <div class="col-md-12 form-group">
          <input type="text" class="form-control" id="newLastNameEdit" name="" placeholder="" value="${user.lnUser}"  >
          
      </div>
      <div class="col-md-12 form-group">
      <input type="text" class="form-control" id="newEmailEdit" name="" placeholder="" value="${user.emailUser
      }"  >
      </div>
      <div class="col-md-12 form-group">
      <input type="text" class="form-control" id="newtelEdit" name="" placeholder="" value="${user.telUser
      }"  >
      </div>
      <div class="col-md-12 form-group">
      <input type="text" class="form-control" id="newNameStoreEdit" name="" placeholder="" value="${user.nameStore
      }"  >
      </div>
      <div class="col-md-12 form-group">
      <input type="text" class="form-control" id="newAddressStoreEdit" name="" placeholder="" value="${user.addressStore
      }"  >
      </div>
  </div>
  
      
     
      
      
      <div class="col-md-12 form-group">
          <button type="submit" value="submit" class="primary-btn" style="border-radius: 5px; border: none;" onclick="validateEditProfile(${user.id})"> Validate </button>
         
      </div>
      
  </div >`
  // affichage d'un formulaire dans la méme page profile.html qui contient les données du l'utilisateur connecté
  document.getElementById("editProfileUser").innerHTML=form;
 } else {
// division d'un formulaire qui contient des inputs (information sur un utilisateur)
form=`<div class="login_form_inner" style="padding-bottom : 70px">
<h3>Edit profile</h3>
<div class="row login_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
    
    <div class="col-md-12 form-group">
        <input type="text" class="form-control" id="newFirstNameEdit" name="" placeholder="" value="${user.fnUser
        }"  >
        
    </div>
    <div class="col-md-12 form-group">
        <input type="text" class="form-control" id="newLastNameEdit" name="" placeholder="" value="${user.lnUser}"  >
        
    </div>
    <div class="col-md-12 form-group">
    <input type="text" class="form-control" id="newEmailEdit" name="" placeholder="" value="${user.emailUser
    }"  >
    
</div>

    
   
    
    </div>
    <div class="col-md-12 form-group">
        <button type="submit" value="submit" class="primary-btn" style="border-radius: 5px; border: none;" onclick=""> Validate </button>
       
    </div>
    
</div >`
// affichage d'un formulaire dans la méme page profile.html qui contient les données du l'utilisateur connecté
document.getElementById("editProfileUser").innerHTML=form;
 }
 
 
}
// fonction pour valider l'edit d'un profile par l'utilisateur lui meme
function validateEditProfile(id) {
  // recuperation des données des données aprés l'edit
  var newLastName=getValue("newLastNameEdit");
  var newFirstName=getValue("newFirstNameEdit");
  var newEmail=getValue("newEmailEdit");
  var newtel=getValue("newtelEdit");
  var newNameStore=getValue("newNameStoreEdit");
  var newAddressStore=getValue("newAddressStoreEdit");
  // recuperation de l'objet users via Ls
  var usersTab = getLsByKey("users");
  // parcourt sur le tableau d'objet user
  for (var i = 0; i < usersTab.length; i++) {
    if (usersTab[i].id==id) {
      // changement des données aprés l'edit
      usersTab[i].lnUser=newLastName;
      usersTab[i].fnUser=newFirstName;
      usersTab[i].emailUser=newEmail;
      usersTab[i].telUser=newtel;
      usersTab[i].nameStore=newNameStore;
      usersTab[i].addressStore=newAddressStore;
      // stop du boucle 
      break;
    }
    
  }
  // mise a jour et enregistrement de Ls apres l'edit
  SetLsByKeyAndTabObjet("users",usersTab);
  // reload automatique
location.reload();
  
}
// fonction pour afficher de maniere dynamique des donneés des utilisateur (store,client) dans la page signupAdmin.html 
function displayUsers() {
  // recuperation de l'objet users via LS
  var usersTab = getLsByKey("users");
  // declaration d'une chaine vide
  var content="";
  // parcour du tableau d'objet users
  for (var i = 0; i < usersTab.length; i++) {
    // conditon sur le role pour le bon affichage
    if (usersTab[i].role !="admin") {
      if (usersTab[i].role=="store" && usersTab[i].status=="NOK") {
          // concatination
      content =
      content +
    `
    <thead>
                                <tr>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Tel</th>
                                    <th scope="col">Password</th>
                                    <th scope="col">Store Name</th>
                                    <th scope="col">Adress</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Actions</th>
                                    
                                </tr>
                            </thead>
  <tbody>
  <tr>
  <td>
  <h5>${usersTab[i].fnUser}</h5>
  </td>
  <td>
  <h5>${usersTab[i].lnUser}</h5>
  </td>
  <td>
  <h5>${usersTab[i].emailUser}</h5> 
  </td>
  <td>
  <h5>${usersTab[i].telUser}</h5> 
  </td>
  <td>
  <h5>${usersTab[i].pwdUser}</h5> 
  </td>
  <td>
  <h5>${usersTab[i].nameStore
  }</h5> 
  </td>
  <td>
  <h5>${usersTab[i].addressStore}</h5> 
  </td>
  <td>
  <h5>${usersTab[i].role
  }</h5> 
  </td>
  <td>
  <h5><button  type="button" class="btn btn-outline-danger" onclick="deleteObjByKeyAndId(${usersTab[i].id},'${'users'}')"><i class="fa fa-trash"></i></button></h5>
  <h5><button  type="button" class="btn btn-outline-success" onclick="validateUserByAdmin(${usersTab[i].id})"><i class="fa fa-check"></i></button></h5>
  </td>
  // 
</tr> 
 </tbody>`
 // affichage du toutes les utilisateur dans la page admin.html 
 document.getElementById("displayUsersAdmin").innerHTML=content;
    }

    else {
      // concatination
  content =
  content +
`
<thead>
                            <tr>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Tel</th>
                                <th scope="col">Password</th>
                                <th scope="col">Store Name</th>
                                <th scope="col">Adress</th>
                                <th scope="col">Role</th>
                                <th scope="col">Actions</th>
                                
                            </tr>
                        </thead>
<tbody>
<tr>
<td>
<h5>${usersTab[i].fnUser}</h5>
</td>
<td>
<h5>${usersTab[i].lnUser}</h5>
</td>
<td>
<h5>${usersTab[i].emailUser}</h5> 
</td>
<td>
<h5>${usersTab[i].telUser}</h5> 
</td>
<td>
<h5>${usersTab[i].pwdUser}</h5> 
</td>
<td>
<h5>${usersTab[i].nameStore
}</h5> 
</td>
<td>
<h5>${usersTab[i].addressStore}</h5> 
</td>
<td>
<h5>${usersTab[i].role
}</h5> 
</td>
<td>
<h5><button  type="button" class="btn btn-outline-danger" onclick="deleteObjByKeyAndId(${usersTab[i].id},'${'users'}')"><i class="fa fa-trash"></i></button></h5>


</td>

</tr>                          
                            
                            

                            
                              
                          
                            
</tbody>`
 // affichage du toutes les utilisateur dans la page signupAdmin.html 
 document.getElementById("displayUsersAdmin").innerHTML=content;
}
}
}
      
 } 
    

// fonction pour l'edition de l'admin sur un produit et l'affichage sur la méme page 
function editProductAdmin(id) {
  // declaration d'une chaine vide
  var form=``
  // recuperation du produit selectionné pour l'edit
  var product=getFromLsByIdAndKey(id, "products");
  // division d'un formulaire qui contient deux inputs (name produit er price produit)
  form=`<div class="login_form_inner" style="padding-bottom : 70px">
  <h3>Edit product</h3>
  <div class="row login_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
      
      <div class="col-md-12 form-group">
          <input type="text" class="form-control" id="newNameEdit" name="" placeholder="" value="${product.nameProduct}"  >
          
      </div>
      <div class="col-md-12 form-group">
          <input type="number" class="form-control" id="newPriceEdit" name="" placeholder="" value="${product.priceProduct}"  >
          
      </div>
      
     
      
      </div>
      <div class="col-md-12 form-group">
          <button type="submit" value="submit" class="primary-btn" style="border-radius: 5px; border: none;" onclick="validateEditProduct(${product.id})"> Validate </button>
         
      </div>
      
  </div >`
  // affichage d'un formulaire dans la méme page admin.html qui contient le nom et le prix du produit selectionné
  document.getElementById("displayEditProduct").innerHTML=form;
 
}
// fonction pour valider l'edit d'un produit par l'admin
function validateEditProduct(id) {
  // recuperation des données des données aprés l'edit
  var newName=getValue("newNameEdit");
  var newPrice=getValue("newPriceEdit");
  // recuperation de l'objet products via Ls
  var productsTab = getLsByKey("products");
  // parcourt sur le tableau d'objet product
  for (var i = 0; i < productsTab.length; i++) {
    if (productsTab[i].id==id) {
      // changement des données aprés l'edit
      productsTab[i].nameProduct=newName;
      productsTab[i].priceProduct=newPrice;
      // stop du boucle 
      break;
    }
    
  }
  // mise a jour et enregistrement de Ls apres l'edit
  SetLsByKeyAndTabObjet("products",productsTab);
  // reload automatique
location.reload();
  
}
// fonction pour la validation d'un client ou store par l'admin 
function validateUserByAdmin(id) {
  // recuperation des données du l'objet users
  var  userTab=getLsByKey("users");
  // parcourt sur le tableau d'objet users
  for (var i = 0; i < userTab.length; i++) {
    if (userTab[i].id==id) {
      // modification du status pour devenie valider 
      userTab[i].status="OK";
      // stop du boucle 
      break;
    }
    
  }
  // enregistrement du nouveau dans LS pour que l'attribut status soit modifier
  SetLsByKeyAndTabObjet("users",userTab);
  // reload automatique
location.reload();
}
// fonction pour afficher tous les ordres confirmer par les client dans la page admin.html 
function displayAdminAllOrders() {
  // recuperation de l'objet ordres
  var tabOrders=getLsByKey("orders");
  // declaration d'une chaine vide
  var content="";
// parcourt de tous les ordres confirmer et non confirmer 
  for (var i = 0; i < tabOrders.length; i++) {
  // recuperer le produit qui a le meme id dans l'objet ordres er l'objet products 
  var product=getFromLsByIdAndKey(tabOrders[i].productId, "products")
  // recuperer le client qui a le meme id dans l'objet ordres et l'objet users   
  var user=getFromLsByIdAndKey(tabOrders[i].idUser, "users")
  // si l'ordre et confirmer
  if (tabOrders[i].statue==true) {
    // concatination
    content=content+
    `


<tr>
<td>
<h5>${tabOrders[i].id}</h5>
</td>

<td>
<h5>${user.fnUser}</h5>
</td>

<td>
<h5>${product.nameProduct
}</h5> 
</td>
<td>
<h5>${product.priceProduct
}</h5> 
</td>
<td>
<h5>${product.categoryProduct
}</h5> 
</td>
<td>
<h5>${product.stockProduct
}</h5> 
</td>
<td>
<h5>${tabOrders[i].productQuantité

}</h5> 
</td>
<td>
<h5><button  type="button" class="btn btn-outline-danger" onclick="deleteObjByKeyAndId(${tabOrders[i].id},'${'orders'}')"><i class="fa fa-trash"></i></button></h5>


</td>

</tr>                          
`
 // affichage du toutes les ordres confirmer dans la page admin.html 
 document.getElementById("displayAllOrders").innerHTML=content;
  }
  
    }
 
}
  // fonction pour afficher les produits d'un store dans la page store.html  
  function displayStoreProduct() {
    // recuperation des données des produits via LS 
    var tabProducts=getLsByKey("products");
    // recuperation de l'id du store connecté
    var userConnected=JSON.parse(localStorage.getItem("displayedUserId"));
    // declaration d'une chaine vide
    var content="";
    // parcourt de tableau d'objet products
    for (var i = 0; i < tabProducts.length; i++) {
      // condition d'egalite de l'id du store dans le tableau des produit et l'id de store connecté
      if (tabProducts[i].idStore==userConnected) {
        // concatination
        content =
        content +
        `<tr>
        <td>
      <h5>${tabProducts[i].id}</h5>
      </td>
      <td>
      <h5>${tabProducts[i].nameProduct}</h5>
      </td>
      <td>
      <h5>${tabProducts[i].categoryProduct}</h5>
      </td>
      <td>
      <h5>${tabProducts[i].priceProduct}</h5> 
      </td>
      <td>
      <h5>${tabProducts[i].stockProduct}</h5> 
      </td>
      <td>
      <h5><button  type="button" class="btn btn-outline-danger" onclick="deleteObjByKeyAndId(${tabProducts[i].id},'${'products'}')"><i class="fa fa-trash"></i></button></h5>
      <p></p>
      <h5><button  type="button" class="btn btn-outline-warning"  onclick="editProductStore(${tabProducts[i].id})"><i class="fa fa-edit"></i></button></h5>
      </td>
      
  </tr>`;
      }
      
    }
    // affichage des produits d'un store dans la page store.html
    document.getElementById("displayStoreProduct").innerHTML=content;
  }
  function editProductStore(id) {

     // declaration d'une chaine vide
  var form=``
  // recuperation du produit selectionné pour l'edit
  var product=getFromLsByIdAndKey(id, "products");
  // division d'un formulaire qui contient deux inputs (name produit er price produit)
  form=`<div class="login_form_inner" style="padding-bottom : 70px">
  <h3>Edit product</h3>
  <div class="row login_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
      
      <div class="col-md-12 form-group">
          <input type="text" class="form-control" id="newNameEdit" name="" placeholder="" value="${product.nameProduct}"  >
          
      </div>
      
      <div class="col-md-12 form-group">
          <input type="number" class="form-control" id="newPriceEdit" name="" placeholder="" value="${product.priceProduct}"  >
          
      </div>
      <div class="col-md-12 form-group">
          <input type="number" class="form-control" id="newStockEdit" name="" placeholder="" value="${product.stockProduct}"  >
          
      </div>
     
      
      </div>
      <div class="col-md-12 form-group">
          <button type="submit" value="submit" class="primary-btn" style="border-radius: 5px; border: none;" onclick="validateEditProductStore(${product.id})"> Validate </button>
         
      </div>
      
  </div >`
  // affichage d'un formulaire dans la méme page admin.html qui contient le nom et le prix du produit selectionné
  document.getElementById("displayEditProductStore").innerHTML=form;
  }
  function validateEditProductStore(id) {
    // recuperation des données des données aprés l'edit
    var newName=getValue("newNameEdit");
    var newPrice=getValue("newPriceEdit");
    var newStock=getValue("newStockEdit");
    // recuperation de l'objet products via Ls
    var productsTab = getLsByKey("products");
    // parcourt sur le tableau d'objet product
    for (var i = 0; i < productsTab.length; i++) {
      if (productsTab[i].id==id) {
        // changement des données aprés l'edit
        productsTab[i].nameProduct=newName;
        productsTab[i].priceProduct=newPrice;
        productsTab[i].stockProduct=newStock;
        // stop du boucle 
        break;
      }
      
    }
    // mise a jour et enregistrement de Ls apres l'edit
    SetLsByKeyAndTabObjet("products",productsTab);
    // reload automatique
  location.reload();
    
  }
  function displayOrdersStore() {
  var tabOrders=getLsByKey("orders");
  // var tabUser=getLsByKey("users");
  var tabProduct=getLsByKey("products");
  
  var userId=JSON.parse(localStorage.getItem("displayedUserId"));
 
  var myProduct=[];

  for (var i = 0; i < tabProduct.length; i++) {
    if (tabProduct[i].idStore==userId) {
      myProduct.push(tabProduct[i]);
      
    }
    
  }
  

  var content="";
 
  for (var i = 0; i < tabOrders.length; i++) {
  for (var j = 0; j < myProduct.length; j++) {
    if (tabOrders[i].productId==myProduct[j].id) {
      if (tabOrders[i].statue) {
        content=content+
      `
 
  <tbody>
  <tr>
  <td>
  <h5>${tabOrders[i].id}</h5>
  </td>
  
  <td>
  <h5>${getFromLsByIdAndKey(tabOrders[i].idUser,"users").fnUser
} ${getFromLsByIdAndKey(tabOrders[i].idUser,"users").lnUser
}</h5>
  </td>
  
  <td>
  <h5>${myProduct[j].nameProduct
  }</h5> 
  </td>
  <td>
  <h5>${myProduct[j].priceProduct
  }</h5> 
  </td>
  <td>
  <h5>${myProduct[j].categoryProduct
  }</h5> 
  </td>
  <td>
  <h5>${myProduct[j].stockProduct
  }</h5> 
  </td>
  <td>
  <h5>${tabOrders[i].productQuantité
  
  }</h5> 
  </td>
  <td>
  <h5><button  type="button" class="btn btn-outline-danger" onclick="deleteObjByKeyAndId(${tabOrders[i].id},'${'orders'}')"><i class="fa fa-trash"></i></button></h5>
  
  
  </td>
  
  </tr>                          
                              
                              
  
                              
                                
                            
                              
  </tbody>`
   // affichage du toutes les utilisateur dans la page signupAdmin.html 
   document.getElementById("displayOrdersStore").innerHTML=content;
      }
      
    }
    
  }
    
  
   
   
  
    }
  }
  function displaySearchProduct() {
    var valid=false;
    // récuperation des données de produit(addProduct.html) et stockage dans un tableau
 var tabProducts = getLsByKey("products");
 var searchNameProduct=getValue("searchNameProduct");
 // declaration d'une chaine vide
 var content = "";
 
 // parcourir le tableau d'objet(produit)
 for (var i = 0; i < tabProducts.length; i++) {
  if (tabProducts[i].nameProduct==searchNameProduct) {
    content =
     content +
     // division d'un seul produit trouvé dans la page product.html
     `<div class="col-lg-3 col-md-6">
   <div class="single-product">
     <img class="img-fluid" src="img/product/p1.jpg" alt="">
     <div class="product-details">
       <h6>${tabProducts[i].nameProduct}</h6>
       <div class="price">
         <h6>${tabProducts[i].priceProduct} DT</h6>
         <h6 class="l-through">$210.00</h6>
       </div>
       <div class="prd-bottom">

         <a href="" class="social-info">
           <span class="ti-bag"></span>
           <p class="hover-text">add to bag</p>
         </a>
         <a href="" class="social-info">
           <span class="lnr lnr-heart"></span>
           <p class="hover-text">Wishlist</p>
         </a>
         <a href="" class="social-info">
           <span class="lnr lnr-sync"></span>
           <p class="hover-text">compare</p>
         </a>
         <a href="" class="social-info">
           <span class="lnr lnr-move"></span>
           <p class="hover-text">view more</p>
         </a>
         <a  class="col-md-12 form-group">
         <a  class="primary-btn" href="#"  onclick="goToDisplayIdProduct(${tabProducts[i].id})"> Display </a>
          
       </a>
       </div>
     </div>
   </div>
 </div>`;
 valid=true;
 // affichage de tous les produit ajoutée dans la page product.html
 document.getElementById("searchProduct").innerHTML = content;
 
 }
}
 if(valid==false)  {
// affichage de tous les produit ajoutée dans la page product.html
document.getElementById("searchProduct").innerHTML = "product not definded";
document.getElementById("searchProduct").style.color="red";

 }
  
  
   
  }

// fonction pour génerer automatiquement l'id d'un objet
function generateId(T) {
  if (T.length == 0) {
    max = 0;
  } else {
    max = T[0].id;
    for (var i = 1; i < T.length; i++) {
      if (T[i].id > max) {
        max = T[i].id;
      }
    }
  }

  return max;
}
// fonction génerique pour recuperer un seul objet qui verifie l'egalité des id de cet objet
function getFromLsByIdAndKey(id, key) {
  var tabId = JSON.parse(localStorage.getItem(key) || "[]");
  for (var i = 0; i < tabId.length; i++) {
    if (tabId[i].id == id) {
      return tabId[i];
    }
  }
}
// fonction génerique de récuperation d'un objet via LS par key
function getLsByKey(key) {
  var Tab = JSON.parse(localStorage.getItem(key) || "[]");
  return (Tab) ;
}
// fonction génerique de suppression d'un objet par son id et le key de l'objet  
function deleteObjByKeyAndId(id,key) {
  var pos;
  var T = getLsByKey(key);
  for (var i = 0; i < T.length; i++) {
    if (T[i].id == id) {
      pos = i;
    }
  }
  T.splice(pos, 1);
  localStorage.setItem(key, JSON.stringify(T));
  location.reload();
}
// fonction pour recuperer un valeur d'un input dans un formulaire
function getValue(id) {
  return(document.getElementById(id).value);
}
// fonction pour enregistrer un tableau d'objet dans LS
function SetLsByKeyAndTabObjet(key,T) {
  return(localStorage.setItem(key,JSON.stringify(T)));
}
 






