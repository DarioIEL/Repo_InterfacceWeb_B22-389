//switch
/**
 * switch (variabile da controllare){
 *      case ...
 *          ..corpo
 *      break
 *      .
 *      .
 * 
 *      default
 *          
 * }
 */

let sceltaUser = "p";

switch (sceltaUser) {

    case "a":
        console.log("Hai selezionato il primo slot");
        
    break;

    case "b":
        console.log("Hai selezionato il secondo slot");
    break;

    case "c":
        console.log("Hai selezionato il terzo slot");
    break;

    default:
        console.log("Non capisco la scelta");
    break;       
}
