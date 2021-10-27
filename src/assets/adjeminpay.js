/***
 * Adjeminpay seamless js sdk v2
 * Author : Adjemin
 *
 */

const API_URL = "https://api.adjeminpay.net";

var head = document.getElementsByTagName("head")[0];

var ms = document.createElement("style");

ms.innerHTML = `body {font-family: Montserrat, Arial, Helvetica, sans-serif;}
 html, body{
     height: 100%;
 }

 .modal {
     display: none; position: fixed; z-index: 999;padding-top: 100px; left: 0;top: 0;width: 100% !important; height: 100% !important; overflow: auto; background-color: rgb(0,0,0);  background-color: rgba(0,0,0,0.3);
 }
 .modal-content {
     display:flex;
     flex-direction: column;
     justify-content: space-between;
     box-shadow: 2px 2px 2px #000;
     border-radius: 10px;
     width: 80%;
     max-width: 400px;
     min-height: 200px;
     position: relative;background-color: #fefefe;margin: auto;padding: 0;border: 1px solid #888;width: 80%;box-shadow: 0 4px 8px 0 rgba(0,0,0,0),0 6px 20px 0 rgba(0,0,0,0);-webkit-animation-name: animatetop;-webkit-animation-duration: 0.4s;animation-name: animatetop;animation-duration: 0.4s;
 }

 @-webkit-keyframes animatetop {from {top:-300px; opacity:0} to {top:0; opacity:1}
 }

 @keyframes animatetop {from {top:-300px; opacity:0}to {top:0; opacity:1}
 }

 .close {
     position:absolute;
     z-index: 999;
     text-align:center;
     display: flex;
     justify-content:center;
     align-items:center;
     box-shadow: 1px 1px 1px #333;
     top: -19px;
     right: -19px;
     height: 38px;
     width: 38px;
     background: #dc3545;
     border-radius: 50%;
     color: white;
     font-size: 36px;
     font-weight: bold;
 }

 .close:hover,
 .close:focus {background: #fc3545;text-decoration: none;cursor: pointer;
 }

 .modal-header {
     border-radius: 10px 10px 0 0;
     padding: 10px;
     font-weight: bold;
     font-size: 26px;
     background-color: #16518D;color: white;
 }

 .modal-body {padding: 10px;}

 .modal-footer {
     border-color: #000;
     border-width: 0 1px 1px 1px;
     border-radius: 0 0 10px 10px;
     background: #fff;
     padding: 10px;
 }

 /* Payment gate super modal */

 /* The Modal (background) */
 .adp-super-modal {
     display: none; /* Hidden by default */
     position: fixed; /* Stay in place */
     z-index: 999; /* Sit on top */
     left: 0;
     top: 0;
     width: 100%; /* Full width */
     height: 100%; /* Full height */
     overflow: auto; /* Enable scroll if needed */
     background-color: rgb(0,0,0); /* Fallback color */
     background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
     /* -webkit-animation-name: fadeIn; Fade in the background
     -webkit-animation-duration: .8s;
     animation-name: fadeIn;
     animation-duration: .8s;  */
 }

 /* Modal Content */
 .adp-super-modal-content {
     position: fixed;
     bottom: 0;
     background-color: #fff;
     width: 100%;
     height: 100%;
     -webkit-animation-name: slideIn;
     -webkit-animation-duration: 0.5s;
     animation-name: slideIn;
     animation-duration: 0.5s
 }



 /* Add Animation */
 @-webkit-keyframes slideIn {
     from {bottom: -300px; opacity: 0}
     to {bottom: 0; opacity: 1}
 }

 @keyframes slideIn {
     from {bottom: -300px; opacity: 0}
     to {bottom: 0; opacity: 1}
 }

 @-webkit-keyframes fadeIn {
     from {opacity: 0}
     to {opacity: 1}
 }

 @keyframes fadeIn {
     from {opacity: 0}
     to {opacity: 1}
 }

 #loader {
     font-size: 10px;
     margin: 50px auto;
     text-indent: -9999em;
     width: 90px;
     height: 90px;
     border-radius: 50%;
     background: #16518D;
     background: -moz-linear-gradient(left, #16518D 10%, rgba(255, 255, 255, 0) 42%);
     background: -webkit-linear-gradient(left, #16518D 10%, rgba(255, 255, 255, 0) 42%);
     background: -o-linear-gradient(left, #16518D 10%, rgba(255, 255, 255, 0) 42%);
     background: -ms-linear-gradient(left, #16518D 10%, rgba(255, 255, 255, 0) 42%);
     background: linear-gradient(to right, #16518D 10%, rgba(255, 255, 255, 0) 42%);
     position: relative;
     -webkit-animation: load3 1.4s infinite linear;
     animation: load3 1.4s infinite linear;
     -webkit-transform: translateZ(0);
     -ms-transform: translateZ(0);
     transform: translateZ(0);
 }

 @-webkit-keyframes spin {
     0% { -webkit-transform: rotate(0deg); }
     100% { -webkit-transform: rotate(360deg); }
 }

 @keyframes spin {
     0% { transform: rotate(0deg); }
     100% { transform: rotate(360deg); }
 }
 #loader:before {
     width: 50%;
     height: 50%;
     background: #16518D;
     border-radius: 100% 0 0 0;
     position: absolute;
     top: 0;
     left: 0;
     content: '';
 }
 #loader:after {
     background: #fff;
     width: 75%;
     height: 75%;
     border-radius: 50%;
     content: '';
     margin: auto;
     position: absolute;
     top: 0;
     left: 0;
     bottom: 0;
     right: 0;
 }
 @-webkit-keyframes load3 {
     0% {
         -webkit-transform: rotate(0deg);
         transform: rotate(0deg);
     }
     100% {
         -webkit-transform: rotate(360deg);
         transform: rotate(360deg);
     }
 }
 @keyframes load3 {
     0% {
         -webkit-transform: rotate(0deg);
         transform: rotate(0deg);
     }
     100% {
         -webkit-transform: rotate(360deg);
         transform: rotate(360deg);
     }
 }
 `;

head.appendChild(ms);

AdpModal = function() {};

AdjeminPay = function() {
    var body = document.getElementsByTagName("BODY")[0];
    var pageContent = body.innerHTML;

    var modal = function(title, content, footer = "") {
        var adjeminPayModal = document.getElementById("AdjeminPayModal");

        if (adjeminPayModal == null) {
            adjeminPayModal = document.createElement("div");
            adjeminPayModal.id = "AdjeminPayModal";
            adjeminPayModal.classList.add("modal");
        }

        adjeminPayModal.innerHTML = `<div class="modal-content">
         <span class="close" onclick="document.getElementById('AdjeminPayModal').style.display='none';">&times;</span>
             <div id="modalTitle" class="modal-header">

                 ${title}
             </div>
             <div id="modalBody" class="modal-body">
                 ${content}
             </div>
             <div id="modalFooter" class="modal-footer">
                 ${footer}
             </div>
         </div>`;

        adjeminPayModal.style.display = "block";
        body.appendChild(adjeminPayModal);

        return {
            open: () => (adjeminPayModal.style.display = "block"),
            close: () => (adjeminPayModal.style.display = "none"),
        };
    };
    var modalError = function(title, footer = "") {
        var adjeminPayModal = document.getElementById("AdjeminPayModal");

        var modalTitle = document.getElementById("modalTitle");
        var modalBody = document.getElementById("modalBody");
        var modalFooter = document.getElementById("modalFooter");

        modalTitle.style.background = "#e62438";
        modalTitle.innerHTML = title;
        modalBody.innerHTML =
            '<img style="display:block;margin: 0 auto" width:100px; src="https://api.adjeminpay.net/img/failed.png">';
        modalFooter.innerHTML = footer;
    };
    var modalFailed = function(title, footer = "") {
        var adjeminPayModal = document.getElementById("AdjeminPayModal");

        if (adjeminPayModal == null) {
            adjeminPayModal = document.createElement("div");
            adjeminPayModal.id = "AdjeminPayModal";
            adjeminPayModal.classList.add("modal");
        }
        adjeminPayModal.style.display = "none";

        adjeminPayModal.innerHTML = `<div class="modal-content">
         <span class="close" onclick="document.getElementById('AdjeminPayModal').style.display='none';">&times;</span>
             <div id="modalTitle" class="modal-header" style="background:#e62438;">
                 ${title}
             </div>
             <div id="modalBody" class="modal-body">
                 <img style="display:block;margin: 0 auto" width:100px; src="https://api.adjeminpay.net/img/failed.png">
             </div>
             <div id="modalFooter" class="modal-footer">
                 ${footer}
             </div>
         </div>`;

        adjeminPayModal.style.display = "block";
        body.appendChild(adjeminPayModal);
    };
    var modalSuccess = function(title, footer = "") {
        var adjeminPayModal = document.getElementById("AdjeminPayModal");

        if (adjeminPayModal == null) {
            adjeminPayModal = document.createElement("div");
            adjeminPayModal.id = "AdjeminPayModal";
            adjeminPayModal.classList.add("modal");
        }
        adjeminPayModal.style.display = "none";

        adjeminPayModal.innerHTML = `<div class="modal-content">
         <span class="close" onclick="document.getElementById('AdjeminPayModal').style.display='none';">&times;</span>
             <div id="modalTitle" class="modal-header" style="background:#2dc068;">
                 ${title}
             </div>
             <div id="modalBody" class="modal-body">
                 <img style="display:block;margin: 0 auto" width:100px; src="https://api.adjeminpay.net/img/successful.png">
             </div>
             <div id="modalFooter" class="modal-footer">
                 ${footer}
             </div>
         </div>`;

        adjeminPayModal.style.display = "block";
        body.appendChild(adjeminPayModal);
    };

    var updateInfoModal = function(title, content, footer = "") {
        var adjeminPayModal = document.getElementById("AdjeminPayModal");

        adjeminPayModal =
            adjeminPayModal.style.display == "none" ? "block" : "none";

        var modalTitle = document.getElementById("modalTitle");
        var modalBody = document.getElementById("modalBody");
        var modalFooter = document.getElementById("modalFooter");

        modalTitle.style.background = "red";
        modalTitle.innerHTML = title;
        modalBody.innerHTML =
            '<img style="display:block;margin: 0 auto" width:100px; src="https://api.adjeminpay.net/img/failed.png">';

        modalFooter.innerHTML = footer;
    };

    var closeInfoModal = function() {
        document.getElementById("AdjeminPayModal").style.display = "none";
    };
    var paymentModal = function(url) {
        var superModal = document.getElementById("adp-super-modal");

        if (superModal == null) {
            superModal = document.createElement("div");
            superModal.id = "adp-super-modal";
            superModal.classList.add("adp-super-modal");
            superModal.style.display = "none";
        }

        superModal.innerHTML = `<div class="adp-super-modal-content">
             <iframe id="adp-payment-frame" src="${url}" allowfullscreen='' frameborder='0' 			style='overflow:hidden !important; height:100%; width:100%;'></iframe>
         </div>`;
        body.appendChild(superModal);
    };
    var openPaymentModal = function() {
        document.getElementById("adp-super-modal").style.display = "block";
    };
    var closePaymentModal = function() {
        document.getElementById("adp-super-modal").style.display = "none";
    };
    var destroyPaymentModal = function() {};

    var openModal = function() {};
    var closeModal = function() {
        var modal = document.getElementById("AdjeminPayModal");
        return (modal.style.display = "none");
    };

    var isEverythingOk = false;
    var statusCheckIntervalId = 0;

    var tries = 0;

    var y = 0;
    var l = [
        "Connexion..",
        "Lancement..",
        "Chargement des infos de paiement..",
        "Envoi requete api",
        "Reception de la rÃ©ponse de l'api..",
        "CrÃ©ation du token..",
        "Confirmation du token..",
        "VÃ©rification des infos de transaction..",
        "PrÃªt Ã  gÃ©nÃ©rer la page de paiement..",
    ];
    var baseUri = API_URL + "/v2/";
    var url_oauth = API_URL + "/oauth/token"
    var url_signature = API_URL + "/v2/getSignature";
    var frameUrl = "";
    var prefix = "adp_";

    var responseMessage = {
        code: "Payment Error",
        message: "Something went wrong",
    };
    var signature = null;
    var authToken = null;

    var events = {
        init: null,
        paymentReady: null,
        signatureCreated: null,
        error: null,
        paymentTerminated: null,
        paymentSuccessful: null,
        paymentFailed: null,
        paymentCancelled: null,
        paymentInitiated: null,
        paymentPending: null,
        checkPaymentStatusStart: null,
        checkPaymentStatusStop: null,
        ajaxStart: null,
        ajaxStop: null,
        callbackEvent: null,
        paymentPrepared: null,
    };

    var userData = {};
    var adjeminpayData = {};

    var paymentData = {
        adp_currency: "CFA",
        adp_amount: 0,
        adp_trans_id: "",
        adp_designation: "",
        adp_custom: "",
        adp_phone_prefixe: "",
        cel_phone_num: "",
    };
    var apiData = {
        adp_client_secret: "",
        adp_client_id: "",
        adp_signature: "",
        adp_designation: "",
        adp_transaction_id: "",
        adp_amount: 0,
        adp_trans_date: "",
        notify_url: "",
        return_url: "",
        cancel_url: "",
    };

    var fireEvent = function(event, data) {
        if (typeof events[event] == "function") {
            events[event](data);
        } else {
            (events[event] = function() {})(data);
        }
    };

    var checkApiData = function(index, value) {
        var checkHasError = false;
        switch (index.toLowerCase()) {
            case "amount":
                if ("number" != typeof value) {
                    responseMessage = {
                        code: "Erreur amount",
                        message: "La valeur du montant n'est pas correcte",
                    };
                    checkHasError = true;
                }
                break;
            case "currency":
                if (["CFA", "EUR", "XOF"].indexOf(value) < 0) {
                    responseMessage = {
                        code: "Erreur currency",
                        message: "Devise " + value + " non disponible",
                    };
                    checkHasError = true;
                }
                break;
            case "transaction_id":
                if (typeof value == undefined) {
                    responseMessage = {
                        code: "Erreur transaction_id",
                        message: "La longueur de transaction_id ne doit pas Ãªtre nulle",
                    };
                    checkHasError = true;
                } else {
                    if (typeof value != "string") {
                        responseMessage = {
                            code: "Erreur transaction_id",
                            message: "transaction_id " +
                                value +
                                " doit Ãªtre une chaine de charactÃ¨res",
                        };
                        checkHasError = true;
                    }
                    if (value.length > 191) {
                        responseMessage = {
                            code: "Erreur transaction_id",
                            message: "La longueur de transaction_id " +
                                value +
                                "doit Ãªtre infÃ©rieure Ã  191",
                        };
                        checkHasError = true;
                    }

                    if (value.length < 1) {
                        responseMessage = {
                            code: "Erreur transaction_id",
                            message: "Transaction_id  non dÃ©finie",
                        };
                        checkHasError = true;
                    }
                }
                break;
        }

        if (checkHasError) {
            isEverythingOk = false;
            fireEvent("error", responseMessage);
            return null;
        } else {
            isEverythingOk = true;
            return value;
        }
    };

    var checkPaymentData = function(index, value) {
        var checkHasError = false;
        switch (index.toLowerCase()) {
            case "amount":
                if ("number" != typeof value) {
                    responseMessage = {
                        code: "Erreur amount",
                        message: "La valeur du montant n'est pas correcte",
                    };
                    checkHasError = true;
                }
                break;
            case "currency":
                if (["CFA", "EUR", "XOF"].indexOf(value) < 0) {
                    responseMessage = {
                        code: "Erreur currency",
                        message: "Devise " + value + " non disponible",
                    };
                    checkHasError = true;
                }
                break;
            case "transaction_id":
                if (typeof value == undefined) {
                    responseMessage = {
                        code: "Erreur transaction_id",
                        message: "La longueur de transaction_id ne doit pas Ãªtre nulle",
                    };
                    checkHasError = true;
                } else {
                    if (typeof value != "string") {
                        responseMessage = {
                            code: "Erreur transaction_id",
                            message: "transaction_id " +
                                value +
                                " doit Ãªtre une chaine de charactÃ¨res",
                        };
                        checkHasError = true;
                    }
                    if (value.length > 191) {
                        responseMessage = {
                            code: "Erreur transaction_id",
                            message: "La longueur de transaction_id " +
                                value +
                                "doit Ãªtre infÃ©rieure Ã  191",
                        };
                        checkHasError = true;
                    }
                    console.log(value);
                    if (value.length < 1) {
                        responseMessage = {
                            code: "Erreur transaction_id",
                            message: "Transaction_id  non dÃ©finie",
                        };
                        checkHasError = true;
                    }
                }
                break;
        }

        if (checkHasError) {
            isEverythingOk = false;
            fireEvent("error", responseMessage);
            return "";
        } else {
            isEverythingOk = true;
            return value;
        }
    };

    var checkMissingApiData = function(AdpConfigData) {
        var checkHasError = false;

        if (AdpConfigData["client_secret"] == null) {
            fireEvent("init", {
                error: "init error",
                message: "client_secret not defined",
            });
            checkHasError = true;
        } else if (typeof AdpConfigData["client_secret"] != "string") {
            fireEvent("init", {
                error: "init error",
                message: "client_secret must be a string",
            });
            checkHasError = true;
        }
        if (AdpConfigData["client_id"] == null) {
            console.log(">>>>>>>> missing client_id");
            checkHasError = true;
            fireEvent("init", {
                error: "init error",
                message: "client_secret not defined",
            });
        } else if (typeof AdpConfigData["client_id"] != "number") {
            fireEvent("init", {
                error: "init error",
                message: "client_id must be a string",
            });
            checkHasError = true;
        }

        if (AdpConfigData["designation"] == null) {
            console.log(">>>>>>>> missing designation");
            checkHasError = true;
            fireEvent("init", {
                error: "init error",
                message: "designation not defined",
            });
        }

        if (AdpConfigData["transaction_id"] == null) {
            console.log(">>>>>>>> missing transaction_id");
            checkHasError = true;
            fireEvent("init", {
                error: "init error",
                message: "transaction_id not defined",
            });
        }

        if (AdpConfigData["amount"] == null) {
            console.log(">>>>>>>> missing amount");
            checkHasError = true;
            fireEvent("init", {
                error: "init error",
                message: "amount not defined",
            });
        }

        if (checkHasError) {
            isEverythingOk = false;
            return false;
        } else {
            isEverythingOk = true;
            return true;
        }
    };
    var checkMissingData = function(userData) {
        var checkHasError = false;
        var values = ["amount", "transaction_id", "currency", "designation", "signature"];
        var error_value = "";
        for (i in values) {
            var value = values[i];
            if (!(value in userData)) {
                responseMessage = {
                    code: "error preparePayment",
                    message: value + " is required",
                };
                checkHasError = true;
                error_value = value;
            } else if (userData[value] == null) {
                responseMessage = {
                    code: "error preparePayment",
                    message: value + " is null",
                };
                checkHasError = true;
                error_value = value;
            }
        }

        if (checkHasError) {
            isEverythingOk = false;
            fireEvent("error", responseMessage);
            return false;
        } else {
            isEverythingOk = true;
            return true;
        }
    };

    var checkFormData = function() {
        return (
            (function() {
                if (null === checkMissingData(userData)) return false;
                return (isEverythingOk = true);
            })() &&
            (function() {
                for (var a in userData)
                    if ("" === checkPaymentData(a, userData[a])) return false;
                return (isEverythingOk = true);
            })()
        );
    };

    var objectMerger = function(e, a) {
        var finalObject = {};
        for (var t in e) finalObject[t] = e[t];
        for (var n in a) finalObject[n] = a[n];
        return finalObject;
    };

    var gFunction = function(eVariable) {
        fireEvent("checkPaymentStatusStart");
        var basicData = {
            adp_client_secret: apiData.adp_client_secret,
            adp_client_id: apiData.adp_client_id,
            adp_trans_id: adjeminpayData.adp_trans_id,
        };
    };
    var clearIntervals = function() {
        clearInterval(statusCheckIntervalId);
    };

    var closePaymentGate = function(time = 0) {
        //
        console.log(">>>>>>>>> Closing payment gate");
        setTimeout(() => {
            document.getElementById("adp-super-modal").innerHTML = "";
            document.getElementById("adp-super-modal").remove();
            console.log(">>>>>>>>> Closing payment gate closed !");
        }, time);
    };

    var http = {
        createRequest: function() {
            if (window.XMLHttpRequest) {
                return new XMLHttpRequest();
            } else {
                for (
                    var xhttp, protocols = [], i = 0; i < protocols.length; i++
                ) {
                    try {
                        xhttp = new ActiveXObject(protocols[i]);
                        break;
                    } catch (exeption) {}
                }
                return xhttp;
            }
        },

        _sendCrashRepport: function(crashReportData, callbacks) {
            var request = http.createRequest();
            request.open("POST", baseUri + "auth/report-crash", true);

            request.onreadystatechange = function() {
                if (request.readyState == XMLHttpRequest.DONE) {
                    if (!JSON.parse(request.response)) {
                        modal(
                            "Echec de l'envoi du rapport d'erreur",

                            "Le rapport d'erreur n'a pas pu Ãªtre envoyÃ©" +
                            "<p> Merci de contacter le <a href='" +
                            supportUrl +
                            "'>support adjeminpay<a> pour une rÃ©clammation",
                            ""
                        );

                        callbacks.error("At Json Parse");
                    } else {
                        var data = JSON.parse(request.response);
                        if (request.status == 200) {
                            modal(
                                "Echec de l'envoi du rapport d'erreur",

                                "Le rapport d'erreur n'a pas pu Ãªtre envoyÃ©" +
                                "<p> Merci de contacter le <a href='" +
                                supportUrl +
                                "'>support adjeminpay<a> pour une rÃ©clammation",
                                ""
                            );
                        } else {
                            modal(
                                "Echec de l'envoi du rapport d'erreur",

                                "Le rapport d'erreur n'a pas pu Ãªtre envoyÃ©" +
                                "<p> Merci de contacter le <a href='" +
                                supportUrl +
                                "'>support adjeminpay<a> pour une rÃ©clammation",
                                ""
                            );

                            callbacks.error(data);
                        }
                    }
                }
            };

            request.setRequestHeader("Accept", "application/json") &&
                request.setRequestHeader("Content-Type", "application/json");

            var formData = new FormData();
            for (i in crashReportData) {
                formData.append(i, crashReportData[i]);
            }

            request.send(formData);
        },
        _ajaxSend: function(url, method, data, callbacks) {
            var request = http.createRequest();
            request.open(method, url, true);
            request.onreadystatechange = function() {
                if (request.readyState == XMLHttpRequest.DONE) {
                    var data = JSON.parse(request.response);
                    if (request.status == 200) {
                        authToken = data.access_token;
                        callbacks.success(data.access_token);
                    } else {
                        callbacks.error(data);
                    }
                }
            };

            request.setRequestHeader("Accept", "application/json") &&
                request.setRequestHeader("Content-Type", "application/json");

            var formData = new FormData();
            for (i in data) {
                formData.append(i, data[i]);
            }

            request.send(formData);
        },

        _getSignature: function(url, method, data, callbacks) {
            var request = http.createRequest();
            request.open(method, url, true);
            request.onreadystatechange = function() {
                if (request.readyState == XMLHttpRequest.DONE) {
                    var data = JSON.parse(request.response);

                    if (request.status == 200) {
                        callbacks.success(data.signature);
                    } else {
                        callbacks.error(data);
                    }
                }
            };

            request.setRequestHeader("Accept", "application/json") &&
                request.setRequestHeader("Content-Type", "application/json");

            var formData = new FormData();
            for (i in data) {
                formData.append(i, data[i]);
            }

            request.send(formData);
        },

        _getPayUrl: function(url, method, data, token, callbacks) {
            var request = http.createRequest();
            request.open(method, url, true);

            request.onreadystatechange = function() {
                if (request.readyState == XMLHttpRequest.DONE) {
                    if (!JSON.parse(request.response)) {
                        modal(
                            "Erreur Interne",

                            "Impossible de traiter la commande" +
                            "<p> Merci de contacter le <a href=''>support adjeminpay<a> si cela se rÃ©pÃ¨te </p>",
                            ""
                        );
                        fireEvent("error", {
                            code: "500",
                            message: "Error processing paymentData, please try again",
                            data: data,
                        });
                    } else {
                        var data = JSON.parse(request.response);
                        callbacks.result(data);
                    }
                }
            };

            request.setRequestHeader("Authorization", "Bearer " + token) &&
                request.setRequestHeader("Content-Type", "application/json") &&
                request.setRequestHeader("Accept", "application/json");

            var formData = new FormData();
            for (i in data) {
                formData.append(i, data[i]);
            }

            request.send(formData);
        },
        _checkTransaction: function(url, data, token, callbacks) {
            var request = http.createRequest();
            request.open("POST", url, true);

            request.onreadystatechange = function() {
                if (request.readyState == XMLHttpRequest.DONE) {
                    if (request.status == 200) {
                        var data = JSON.parse(request.response);
                        callbacks.success(data);
                    } else {
                        console.log(request.response);
                        fireEvent("error", {
                            error: "An error occured",
                            message: "Unable to follow transaction",
                        });
                    }
                }
            };

            request.setRequestHeader("Authorization", "Bearer " + token) &&
                request.setRequestHeader("Content-Type", "application/json") &&
                request.setRequestHeader("Accept", "application/json");

            var formData = new FormData();
            for (i in data) {
                formData.append(i, data[i]);
            }
            request.send(formData);
        },
        _getUserButtonsFeedback: function(url, data, token, callbacks) {
            var request = http.createRequest();
            request.open("POST", url, true);

            request.onreadystatechange = function() {
                if (request.readyState == XMLHttpRequest.DONE) {
                    if (request.status == 200) {
                        var data = JSON.parse(request.response);
                        callbacks.success(data);
                    } else {
                        fireEvent("error", {
                            error: "An error occured",
                            message: "Unable to follow user feedback",
                        });

                        checkTransactionStatus();
                    }
                }
            };

            request.setRequestHeader("Authorization", "Bearer " + token) &&
                request.setRequestHeader("Content-Type", "application/json") &&
                request.setRequestHeader("Accept", "application/json");

            var formData = new FormData();
            for (i in data) {
                formData.append(i, data[i]);
            }
            request.send(formData);
        },
    };

    var checkTransactionStatus = function() {
        tries++;
        http._checkTransaction(
            baseUri + "/api/v2/checkPaymentStatus", {
                transaction_id: userData.adp_transaction_id,
            },
            authToken, {
                success: function(data) {
                    console.log(">>>>>>>>>> got status");
                    console.log(data);
                    if (data.status == "SUCCESSFUL") {
                        clearIntervals();
                        console.log(">>>>>>>>>> success");

                        modalSuccess("Paiement RÃ©ussi :) !");
                        closePaymentGate();

                        fireEvent("paymentTerminated", {
                            title: "Le paiement a rÃ©ussi",
                            status: data.status,
                            message: data.reason,
                        });
                        fireEvent("paymentSuccessful", {
                            title: "Le paiement a rÃ©ussi",
                            status: data.status,
                            message: data.reason,
                        });
                    } else if (data.status == "FAILED") {
                        clearIntervals();
                        console.log(">>>>>>>>>> status failed");

                        modalFailed("Echec du paiement :(", data.reason);
                        closePaymentGate();

                        fireEvent("paymentTerminated", {
                            title: "Le paiement a Ã©chouÃ©",
                            status: data.status,
                            message: data.reason,
                        });
                        fireEvent("paymentFailed", {
                            title: "Le paiement a Ã©chouÃ©",
                            status: data.status,
                            message: data.reason,
                        });
                    } else if (data.status == "CANCELLED") {
                        clearIntervals();
                        console.log(">>>>>>>>>> status cancelled");

                        modalFailed(
                            "Paiement annulÃ©",
                            "Vous avez annulÃ© le paiement"
                        );
                        closePaymentGate();

                        fireEvent("paymentTerminated", {
                            title: "Le paiement a Ã©tÃ© annulÃ©",
                            status: data.status,
                            message: data.reason,
                        });
                        fireEvent("paymentCancelled", {
                            title: "Le paiement a Ã©tÃ© annulÃ©",
                            status: data.status,
                            message: data.reason,
                        });
                    }
                },
                error: function(data) {
                    fireEvent("error", {
                        error: "An error occured",
                        message: "Unable to follow transaction",
                    });
                    if (tries > 60) {
                        modalFailed(
                            "Erreur",
                            "Une erreur est survenue lors du paiement"
                        );
                        closePaymentGate();

                        modal("Erreur", response.message, "");
                        fireEvent("error", {
                            error: "Transaction TerminÃ©e",
                            message: "Impossible de suivre la transaction",
                        });

                        clearIntervals();
                    }
                },
            }
        );
    };
    var getUserFeedback = function() {
        tries++;
        http._getUserButtonsFeedback(
            baseUri + "auth/getUserFeedback", {
                transaction_id: userData.adp_transaction_id,
            },
            authToken, {
                success: function(data) {
                    console.log(">>>>>>>>>> get status success");

                    if (data.status == "SUCCESSFUL") {
                        clearIntervals();
                        console.log(">>>>>>>>>> success");

                        fireEvent("paymentTerminated", {
                            title: "Le paiement a rÃ©ussi",
                            message: "Status :" + data.status,
                        });

                        modal(
                            "Paiement RÃ©ussi !",
                            "Status :" + data.status,
                            ""
                        );

                        closePaymentGate(10000);
                    } else if (data.status == "FAILED") {
                        clearIntervals();
                        console.log(">>>>>>>>>> status failed");

                        fireEvent("paymentTerminated", {
                            title: "Le paiement a Ã©chouÃ©",
                            message: "Raison :" + data.reason,
                        });

                        modal(
                            "Echec du paiement !",
                            "Status :" + data.status,
                            ""
                        );

                        closePaymentGate(10000);
                    } else if (data.status == "CANCELLED") {
                        clearIntervals();
                        console.log(">>>>>>>>>> status cancelled");

                        fireEvent("paymentTerminated", {
                            title: "Le paiement a Ã©tÃ© annulÃ©",
                            message: "Raison :" + data.reason,
                        });

                        modal(
                            "Paiement AnnulÃ© !",
                            "Status :" + data.status,
                            ""
                        );

                        closePaymentGate(10000);
                    }
                },
                error: function(data) {
                    console.log(">>>>>> Tries");
                    console.log(tries);

                    fireEvent("error", {
                        error: "An error occured",
                        message: "Unable to follow transaction",
                    });
                    if (tries > 60) {
                        modal("Erreur", response.message, "");
                        fireEvent("error", {
                            error: "Transaction TerminÃ©e",
                            message: "Impossible de suivre la transaction",
                        });

                        clearIntervals();
                        setTimeout(() => {
                            closePaymentGate();
                        }, 5000);
                    }
                },
            }
        );
    };

    return {
        on: function(event, callback) {
            if (void 0 !== events[event]) {
                if ("function" == typeof callback) {
                    events[event] = callback;
                }
            }
        },
        init: function(AdpConfigData) {
            if (!checkMissingApiData(AdpConfigData)) {
                modalFailed("Erreur !", "Erreur survenue Ã  l'initialisation");
                return false;
            }

            for (var element in AdpConfigData) {
                if (apiData[prefix + element] !== void 0) {
                    apiData[prefix + element] = checkApiData(
                        element,
                        AdpConfigData[element]
                    );
                }
            }


            /*  $.ajax({
                  type: "POST",
                  url: url_signature,
                  data : {
                      client_secret: apiData["adp_client_secret"],
                     client_id: apiData["adp_client_id"],
                  },
                  success: function (response) {

                      console.log(response)
                      return false;


                  },
                  error: function (response) {

                  },
          }); */



            http._getSignature(
                url_signature,
                "POST", {

                    client_secret: apiData["adp_client_secret"],
                    client_id: apiData["adp_client_id"],
                    transaction_id: apiData["adp_transaction_id"],
                    designation: apiData["adp_designation"],
                    amount: apiData["adp_amount"],

                }, {
                    success: function(sign) {
                        signature = sign;
                    },
                    error: function(response) {
                        modalFailed(
                            "Erreur serveur !",
                            "Erreur survenue Ã  l'initialisation"
                        );
                        fireEvent("error", {
                            error: response.error,
                            message: response.message,
                        });
                    },
                }
            );




            http._ajaxSend(
                url_oauth,
                "POST", {

                    client_secret: apiData["adp_client_secret"],
                    client_id: apiData["adp_client_id"],
                    "grant_type": "client_credentials",
                }, {
                    success: function(token) {
                        authToken = token;
                        fireEvent("init", signature);
                    },
                    error: function(response) {
                        modalFailed(
                            "Erreur serveur !",
                            "Erreur survenue Ã  l'initialisation"
                        );
                        fireEvent("error", {
                            error: response.error,
                            message: response.message,
                        });
                    },
                }
            );
        },

        getConfig: function() {
            return apiData;
        },
        preparePayment: function(userPaymentData) {
            modal(
                "Chargement...",
                "<div id='loader'></div>",
                "<span id='loadingText'>Initialisation..</span>"
            );
            var lt = document.getElementById("loadingText");

            if (!checkMissingData(userPaymentData)) {
                modalFailed(
                    "Erreur !",
                    "Erreur lors de la prÃ©paration de votre transaction"
                );
                return false;
            }

            var y = 0;

            var timer = setInterval(function() {
                if (y < l.length - 2) {
                    y++;
                    lt.innerHTML = l[y];
                } else {
                    clearInterval(timer);
                    y = 0;
                }
            }, 200);

            var tImeStamp;

            tImeStamp = new Date()
                .toISOString()
                .match(/(\d{4}\-\d{2}\-\d{2})T(\d{2}:\d{2}:\d{2})/);

            apiData.adp_trans_date = tImeStamp[1] + " " + tImeStamp[2];

            for (var element in apiData) {
                userData[element] = apiData[element];
            }

            for (var element in userPaymentData) {
                userData[prefix + element] = checkPaymentData(
                    element,
                    userPaymentData[element]
                );
                if (userData[prefix + element] == null) {
                    break;
                }
            }
            //
            if (isEverythingOk == false) {
                modalFailed("Erreur !", "Erreur survenue Ã  l'initialisation");
                return false;
            }

            document.getElementById("loadingText").innerHTML = "Pret";
            fireEvent("paymentInitiated", "Ready to render payment view");
        },
        renderPaymentView: function() {
            //
            if (isEverythingOk == false) {
                modalFailed("Erreur !", "Erreur survenue..");
                return false;
            }
            //
            if (isEverythingOk) {
                setTimeout(function() {
                    http._getPayUrl(
                        baseUri + "getPayUrl",
                        "POST",
                        userData,
                        authToken, {
                            result: function(responseJson) {
                                if (responseJson.code != 200) {
                                    modalError(
                                        "Erreur",
                                        "Une erreur est survenue"
                                    );

                                    fireEvent("error", responseJson);
                                } else {
                                    var frameSrc = responseJson.url;
                                    console.log("closed window");
                                    frameUrl = frameSrc;
                                    paymentModal(frameSrc);

                                    var lt = document.getElementById(
                                        "loadingText"
                                    );
                                    var modalBody = document.getElementById(
                                        "modalBody"
                                    );

                                    setTimeout(() => {
                                        modalBody.innerHTML =
                                            '<img  style="display:block;margin: 0 auto" width:100px; src="https://img.icons8.com/fluent/96/000000/checkmark.png"/>';
                                        lt.innerHTML =
                                            "Page de paiement gÃ©nÃ©rÃ©e !";
                                    }, 1000);

                                    setTimeout(() => {
                                        lt.innerHTML =
                                            "Chargement de la page de paiement..";
                                    }, 1000);

                                    fireEvent("paymentStarted");

                                    setTimeout(function() {
                                        closeInfoModal();
                                        openPaymentModal();
                                    }, 3000);

                                    fireEvent(
                                        "paymentPending",
                                        "Waiting on customer to pay"
                                    );

                                    statusCheckIntervalId = setInterval(() => {
                                        // checkTransactionStatus();
                                    }, 5000);
                                }
                            },
                        }
                    );
                }, 3000);
            }
        },

        stopCheckingStatus: function() {
            clearIntervals();
        },
    };
};

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
};
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for (var i = this.length - 1; i >= 0; i--) {
        if (this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
};