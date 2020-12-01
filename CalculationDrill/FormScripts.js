function formActive (check, form) {
    let tgt = form;
    let checker = check;
    if(checker.checked === false) tgt.disabled = "disabled";
    else tgt.disabled = null;
}
function formInactive (check, form) {
    let tgt = form;
    let checker = check;
    if(checker.checked === false) tgt.disabled = null;
    else tgt.disabled = "disabled";
}
function formDisplay (check, form) {
    let tgt = form;
    let checker = check;
    if(checker.checked === false) tgt.style.display = "none";
    else tgt.style.display = "block";
}
function formHide (check, form) {
    let tgt = form;
    let checker = check;
    if(checker.checked === false) tgt.style.display = "block";
    else tgt.style.display = "none";
}
