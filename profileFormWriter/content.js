(function (window, document) {
  let url = location.href;
  if((url.indexOf("https://c.myjcom.jp/user/present") >= 0 && url.indexOf("?login=1") >= 0) && url.indexOf("?action") < 0 ) inputJcomQuestionnaire ();

  function inputJcomQuestionnaire () {
      let isAutoInput = window.confirm("登録のあるフォームです\nフォーム名：JCOMアンケート\n自動入力しましか？");
      if(!isAutoInput) return;
      chrome.storage.local.get("ProfilesJP", function (value) {
          if(document.getElementsByName("1_lastname")[0]) document.getElementsByName("1_lastname")[0].value = value.ProfilesJP.LastName.Kanji;
          if(document.getElementsByName("1_firstname")[0]) document.getElementsByName("1_firstname")[0].value = value.ProfilesJP.FirstName.Kanji;
          if(document.getElementsByName("2_lastname")) document.getElementsByName("2_lastname")[0].value = value.ProfilesJP.LastName.Katakana;
          if(document.getElementsByName("2_firstname")[0]) document.getElementsByName("2_firstname")[0].value = value.ProfilesJP.FirstName.Katakana;
          if(document.getElementsByClassName("p-postal-code")[0]) document.getElementsByClassName("p-postal-code")[0].value = value.ProfilesJP.PostalCode;
          if(document.getElementsByClassName("p-locality")[0]) document.getElementsByClassName("p-locality")[0].value = value.ProfilesJP.CityName.Kanji + value.ProfilesJP.StreetNumber.Kanji.slice(0,3);
          if(document.getElementsByClassName("p-extended-address")[0]) document.getElementsByClassName("p-extended-address")[0].value = value.ProfilesJP.StreetNumber.Number.slice(2) + "　" + value.ProfilesJP.Buliding.Kanji;
          if(document.getElementsByClassName("form-telephone")[0]) document.getElementsByClassName("form-telephone")[0].value = value.ProfilesJP.PhoneNumber.Number;
          if(document.getElementsByClassName("form-telephone-day")[0]) document.getElementsByClassName("form-telephone-day")[0].value = value.ProfilesJP.MobileNumber.Number;
          if(document.getElementsByClassName("form-email")[0]) document.getElementsByClassName("form-email")[0].value = value.ProfilesJP.MailAddress.MailAddress1;
          if(document.getElementsByClassName("form-email")[1]) document.getElementsByClassName("form-email")[1].value = value.ProfilesJP.MailAddress.MailAddress1;
          
          if(document.getElementsByClassName("p-region")[0]) document.getElementsByClassName("p-region")[0].selectedIndex = 12;
          if(document.getElementsByClassName("form-birthday")[0]) document.getElementsByClassName("form-birthday")[0].selectedIndex = 64;
          if(document.getElementsByClassName("form-birthday")[1]) document.getElementsByClassName("form-birthday")[1].selectedIndex = 10;
          if(document.getElementsByClassName("form-birthday")[2]) document.getElementsByClassName("form-birthday")[2].selectedIndex = 12;
          if(document.getElementById("9-0")) document.getElementById("9-0").checked = true;
          if(document.getElementById("10-0")) document.getElementById("10-0").checked = true;
      });
  }
}) (window, document);