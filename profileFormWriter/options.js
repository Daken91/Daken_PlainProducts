(function (window, document) {
  let url = location.href;
  if (url.indexOf("options.html") >= 0) {
      window.addEventListener("load", savedDataLoad, false);
      document.getElementById("dataSaveButton").addEventListener('click', dataSet, false);
      document.getElementById("dataLoadButton").addEventListener('click', savedDataLoad, false);
      document.getElementById("dataClearButton").addEventListener('click', dataClear, false);
  }
}) (window, document);

function savedDataLoad (){
    chrome.storage.local.get("ProfilesJP", function (value) {
        document.getElementById("fullNameJPKanji").value = value.ProfilesJP.FullName.Kanji;
        document.getElementById("fullNameJPHira").value = value.ProfilesJP.FullName.Hiragana;
        document.getElementById("fullNameJPKana").value = value.ProfilesJP.FullName.Katakana;

        document.getElementById("lastNameJPKanji").value = value.ProfilesJP.LastName.Kanji;
        document.getElementById("lastNameJPHira").value = value.ProfilesJP.LastName.Hiragana;
        document.getElementById("lastNameJPKana").value = value.ProfilesJP.LastName.Katakana;
        
        document.getElementById("firstNameJPKanji").value = value.ProfilesJP.FirstName.Kanji;
        document.getElementById("firstNameJPHira").value = value.ProfilesJP.FirstName.Hiragana;
        document.getElementById("firstNameJPKana").value = value.ProfilesJP.FirstName.Katakana;
            
        document.getElementById("postalCodeJP").value = value.ProfilesJP.PostalCode;

        document.getElementById("prefectureJPKanji").value = value.ProfilesJP.Prefecture.Kanji;
        document.getElementById("prefectureJPHira").value = value.ProfilesJP.Prefecture.Hiragana;
            
        document.getElementById("citynameJPKanji").value = value.ProfilesJP.CityName.Kanji;
        document.getElementById("citynameJPHira").value = value.ProfilesJP.CityName.Hiragana;

        document.getElementById("streetNumberJPKanji").value = value.ProfilesJP.StreetNumber.Kanji;
        document.getElementById("streetNumberJP").value = value.ProfilesJP.StreetNumber.Number;

        document.getElementById("buildingJPKanji").value = value.ProfilesJP.Buliding.Kanji;
        document.getElementById("buildingJPHira").value = value.ProfilesJP.Buliding.Hiragana;

        document.getElementById("phoneNumberJP").value = value.ProfilesJP.PhoneNumber.Number;
        document.getElementById("phoneNumberJPdivided").value = value.ProfilesJP.PhoneNumber.Divided;

        document.getElementById("mobileNumberJP").value = value.ProfilesJP.MobileNumber.Number;
        document.getElementById("mobileNumberJPdivided").value = value.ProfilesJP.MobileNumber.Divided;

        document.getElementById("birthJP").value = value.ProfilesJP.Birth.Seireki;
        document.getElementById("birthJPNengo").value = value.ProfilesJP.Birth.Wareki;
        document.getElementById("birthJPNumber").value = value.ProfilesJP.Birth.Number;

        document.getElementById("birthYearJP").value = value.ProfilesJP.BirthYear.Seireki;
        document.getElementById("birthYearJPNengo").value = value.ProfilesJP.BirthYear.Wareki;

        document.getElementById("birthMonthJP").value = value.ProfilesJP.BirthMonth;
        document.getElementById("birthDayJP").value = value.ProfilesJP.BirthDay;
        
        document.getElementById("cardNumberJP").value = value.ProfilesJP.CreditCard.Number;
        document.getElementById("cardNumberJPdivided").value = value.ProfilesJP.CreditCard.Divided;
        document.getElementById("cardSecurityNumberJP").value = value.ProfilesJP.CreditCard.SecurityCode;

        document.getElementById("mailAddressJP1").value = value.ProfilesJP.MailAddress.MailAddress1;
        document.getElementById("mailAddressJP2").value = value.ProfilesJP.MailAddress.MailAddress2;
        document.getElementById("mailAddressJP3").value = value.ProfilesJP.MailAddress.MailAddress3;
        document.getElementById("mailAddressJP4").value = value.ProfilesJP.MailAddress.MailAddress4;
        document.getElementById("mailAddressJP5").value = value.ProfilesJP.MailAddress.MailAddress5;
            
        document.getElementById("passwordJP1").value = value.ProfilesJP.Password.Password1;
        document.getElementById("passwordJP2").value = value.ProfilesJP.Password.Password2;
        document.getElementById("passwordJP3").value = value.ProfilesJP.Password.Password3;
        document.getElementById("passwordJP4").value = value.ProfilesJP.Password.Password4;
        document.getElementById("passwordJP5").value = value.ProfilesJP.Password.Password5;
        document.getElementById("passwordJP6").value = value.ProfilesJP.Password.Password6;
        document.getElementById("passwordJP7").value = value.ProfilesJP.Password.Password7;
        document.getElementById("passwordJP8").value = value.ProfilesJP.Password.Password8;
        document.getElementById("passwordJP9").value = value.ProfilesJP.Password.Password9;
        document.getElementById("passwordJP10").value = value.ProfilesJP.Password.Password10;
        document.getElementById("passwordJP11").value = value.ProfilesJP.Password.Password11;
        document.getElementById("passwordJP12").value = value.ProfilesJP.Password.Password12;
        document.getElementById("passwordJP13").value = value.ProfilesJP.Password.Password13;
        document.getElementById("passwordJP14").value = value.ProfilesJP.Password.Password14;
        document.getElementById("passwordJP15").value = value.ProfilesJP.Password.Password15;
    });
    
    chrome.storage.local.get("ProfilesEN", function (value) {
        document.getElementById("fullNameEN").value = value.ProfilesEN.FullName;

        document.getElementById("lastNameEN").value = value.ProfilesEN.LastName;

        document.getElementById("firstNameEN").value = value.ProfilesEN.FirstName;
            
        document.getElementById("postalCodeEN").value = value.ProfilesEN.PostalCode;

        document.getElementById("prefectureEN").value = value.ProfilesEN.Prefecture;
            
        document.getElementById("citynameEN").value = value.ProfilesEN.CityName;

        document.getElementById("streetNameEN").value = value.ProfilesEN.StreetName;
        document.getElementById("streetNumberEN").value = value.ProfilesEN.StreetNumber;

        document.getElementById("buildingEN").value = value.ProfilesEN.Buliding;

        document.getElementById("phoneNumberEN").value = value.ProfilesEN.PhoneNumber.Number;
        document.getElementById("phoneNumberENdivided").value = value.ProfilesEN.PhoneNumber.Divided;

        document.getElementById("mobileNumberEN").value = value.ProfilesEN.MobileNumber.Number;
        document.getElementById("mobileNumberENdivided").value = value.ProfilesEN.MobileNumber.Divided;

        document.getElementById("birthEN-USNumber").value = value.ProfilesEN.Birth.USNumber;
        document.getElementById("birthEN-US").value = value.ProfilesEN.Birth.US;
        document.getElementById("birthEN-EUNumber").value = value.ProfilesEN.Birth.EUNumber;
        document.getElementById("birthEN-EU").value = value.ProfilesEN.Birth.EU;

        document.getElementById("birthYearEN").value = value.ProfilesEN.BirthYear;
            
        document.getElementById("birthMonthEN").value = value.ProfilesEN.BirthMonth.Month;
        document.getElementById("birthMonthENNumber").value = value.ProfilesEN.BirthMonth.Number;
        
        document.getElementById("birthDayEN").value = value.ProfilesEN.BirthDay.Day;
        document.getElementById("birthDayENNumber").value = value.ProfilesEN.BirthDay.Number;
        
        document.getElementById("cardNumberEN").value = value.ProfilesEN.CreditCard.Number;
        document.getElementById("cardNumberENdivided").value = value.ProfilesEN.CreditCard.Divided;
        document.getElementById("cardSecurityNumberEN").value = value.ProfilesEN.CreditCard.SecurityCode;

        document.getElementById("mailAddressEN1").value = value.ProfilesEN.MailAddress.MailAddress1;
        document.getElementById("mailAddressEN2").value = value.ProfilesEN.MailAddress.MailAddress2;
        document.getElementById("mailAddressEN3").value = value.ProfilesEN.MailAddress.MailAddress3;
        document.getElementById("mailAddressEN4").value = value.ProfilesEN.MailAddress.MailAddress4;
        document.getElementById("mailAddressEN5").value = value.ProfilesEN.MailAddress.MailAddress5;
            
        document.getElementById("passwordEN1").value = value.ProfilesEN.Password.Password1;
        document.getElementById("passwordEN2").value = value.ProfilesEN.Password.Password2;
        document.getElementById("passwordEN3").value = value.ProfilesEN.Password.Password3;
        document.getElementById("passwordEN4").value = value.ProfilesEN.Password.Password4;
        document.getElementById("passwordEN5").value = value.ProfilesEN.Password.Password5;
        document.getElementById("passwordEN6").value = value.ProfilesEN.Password.Password6;
        document.getElementById("passwordEN7").value = value.ProfilesEN.Password.Password7;
        document.getElementById("passwordEN8").value = value.ProfilesEN.Password.Password8;
        document.getElementById("passwordEN9").value = value.ProfilesEN.Password.Password9;
        document.getElementById("passwordEN10").value = value.ProfilesEN.Password.Password10;
        document.getElementById("passwordEN11").value = value.ProfilesEN.Password.Password11;
        document.getElementById("passwordEN12").value = value.ProfilesEN.Password.Password12;
        document.getElementById("passwordEN13").value = value.ProfilesEN.Password.Password13;
        document.getElementById("passwordEN14").value = value.ProfilesEN.Password.Password14;
        document.getElementById("passwordEN15").value = value.ProfilesEN.Password.Password15;
    });
}

function dataSet () {
    chrome.storage.local.set(
  {
    "ProfilesJP": {
        "FullName": {
            "Kanji": document.getElementById("fullNameJPKanji").value,
            "Hiragana": document.getElementById("fullNameJPHira").value,
            "Katakana": document.getElementById("fullNameJPKana").value
        },
        "LastName": {
            "Kanji": document.getElementById("lastNameJPKanji").value,
            "Hiragana": document.getElementById("lastNameJPHira").value,
            "Katakana": document.getElementById("lastNameJPKana").value
        },
        "FirstName": {
            "Kanji": document.getElementById("firstNameJPKanji").value,
            "Hiragana": document.getElementById("firstNameJPHira").value,
            "Katakana": document.getElementById("firstNameJPKana").value
        },
        "PostalCode": document.getElementById("postalCodeJP").value,
        "Prefecture": {
            "Kanji": document.getElementById("prefectureJPKanji").value,
            "Hiragana": document.getElementById("prefectureJPHira").value
        },
        "CityName": {
            "Kanji": document.getElementById("citynameJPKanji").value,
            "Hiragana": document.getElementById("citynameJPHira").value
        },
        "StreetNumber": {
            "Kanji": document.getElementById("streetNumberJPKanji").value,
            "Number": document.getElementById("streetNumberJP").value
        },
        "Buliding": {
            "Kanji": document.getElementById("buildingJPKanji").value,
            "Hiragana": document.getElementById("buildingJPHira").value
        },
        "PhoneNumber": {
            "Number": document.getElementById("phoneNumberJP").value,
            "Divided": document.getElementById("phoneNumberJPdivided").value
        },
        "MobileNumber": {
            "Number": document.getElementById("mobileNumberJP").value,
            "Divided": document.getElementById("mobileNumberJPdivided").value
        },
        "Birth": {
            "Seireki": document.getElementById("birthJP").value,
            "Wareki": document.getElementById("birthJPNengo").value,
            "Number": document.getElementById("birthJPNumber").value
        },
        "BirthYear": {
            "Seireki": document.getElementById("birthYearJP").value,
            "Wareki": document.getElementById("birthYearJPNengo").value
        },
        "BirthMonth": document.getElementById("birthMonthJP").value,
        "BirthDay": document.getElementById("birthDayJP").value,
        "CreditCard": {
            "Number": document.getElementById("cardNumberJP").value,
            "Divided": document.getElementById("cardNumberJPdivided").value,
            "SecurityCode": document.getElementById("cardSecurityNumberJP").value
        },
        "MailAddress": {
            "MailAddress1": document.getElementById("mailAddressJP1").value,
            "MailAddress2": document.getElementById("mailAddressJP2").value,
            "MailAddress3": document.getElementById("mailAddressJP3").value,
            "MailAddress4": document.getElementById("mailAddressJP4").value,
            "MailAddress5": document.getElementById("mailAddressJP5").value
        },
        "Password": {
            "Password1": document.getElementById("passwordJP1").value,
            "Password2": document.getElementById("passwordJP2").value,
            "Password3": document.getElementById("passwordJP3").value,
            "Password4": document.getElementById("passwordJP4").value,
            "Password5": document.getElementById("passwordJP5").value,
            "Password6": document.getElementById("passwordJP6").value,
            "Password7": document.getElementById("passwordJP7").value,
            "Password8": document.getElementById("passwordJP8").value,
            "Password9": document.getElementById("passwordJP9").value,
            "Password10": document.getElementById("passwordJP10").value,
            "Password11": document.getElementById("passwordJP11").value,
            "Password12": document.getElementById("passwordJP12").value,
            "Password13": document.getElementById("passwordJP13").value,
            "Password14": document.getElementById("passwordJP14").value,
            "Password15": document.getElementById("passwordJP15").value
        }
    },
    "ProfilesEN": {
        "FullName": document.getElementById("fullNameEN").value,
        "LastName": document.getElementById("lastNameEN").value,
        "FirstName": document.getElementById("firstNameEN").value,
        "PostalCode": document.getElementById("postalCodeEN").value,
        "Prefecture": document.getElementById("prefectureEN").value,
        "CityName": document.getElementById("citynameEN").value,
        "StreetName": document.getElementById("streetNameEN").value,
        "StreetNumber": document.getElementById("streetNumberEN").value,
        "Buliding": document.getElementById("buildingEN").value,
        "PhoneNumber": {
            "Number": document.getElementById("phoneNumberEN").value,
            "Divided": document.getElementById("phoneNumberENdivided").value
        },
        "MobileNumber": {
            "Number": document.getElementById("mobileNumberEN").value,
            "Divided": document.getElementById("mobileNumberENdivided").value
        },
        "Birth": {
            "USNumber": document.getElementById("birthEN-USNumber").value,
            "US": document.getElementById("birthEN-US").value,
            "EUNumber": document.getElementById("birthEN-EUNumber").value,
            "EU": document.getElementById("birthEN-EU").value
        },
        "BirthYear": document.getElementById("birthYearEN").value,
        "BirthMonth": {
            "Month": document.getElementById("birthMonthEN").value,
            "Number": document.getElementById("birthMonthENNumber").value
        },
        "BirthDay": {
            "Day": document.getElementById("birthDayEN").value,
            "Number": document.getElementById("birthDayENNumber").value
        },
        "CreditCard": {
            "Number": document.getElementById("cardNumberEN").value,
            "Divided": document.getElementById("cardNumberENdivided").value,
            "SecurityCode": document.getElementById("cardSecurityNumberEN").value
        },
        "MailAddress": {
            "MailAddress1": document.getElementById("mailAddressEN1").value,
            "MailAddress2": document.getElementById("mailAddressEN2").value,
            "MailAddress3": document.getElementById("mailAddressEN3").value,
            "MailAddress4": document.getElementById("mailAddressEN4").value,
            "MailAddress5": document.getElementById("mailAddressEN5").value
        },
        "Password": {
            "Password1": document.getElementById("passwordEN1").value,
            "Password2": document.getElementById("passwordEN2").value,
            "Password3": document.getElementById("passwordEN3").value,
            "Password4": document.getElementById("passwordEN4").value,
            "Password5": document.getElementById("passwordEN5").value,
            "Password6": document.getElementById("passwordEN6").value,
            "Password7": document.getElementById("passwordEN7").value,
            "Password8": document.getElementById("passwordEN8").value,
            "Password9": document.getElementById("passwordEN9").value,
            "Password10": document.getElementById("passwordEN10").value,
            "Password11": document.getElementById("passwordEN11").value,
            "Password12": document.getElementById("passwordEN12").value,
            "Password13": document.getElementById("passwordEN13").value,
            "Password14": document.getElementById("passwordEN14").value,
            "Password15": document.getElementById("passwordEN15").value
        }
    }
  }
);
}

function dataClear () {
    let dataArray = document.getElementsByClassName("inputForm");
    for (let i=0; i < dataArray.length; i++) {
        dataArray[i].value = "";
    }
}