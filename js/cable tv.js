const biller = document.getElementById("biller");
const paymentItem = document.getElementById("payment-item");
const cableAmount = document.getElementById("cabletv-amount");

let changeValue = () => {
    if (biller.value == "select-biller") {
        paymentItem.innerHTML = `<option value="payment">Payment item</option>`
    } else if (biller.value == "gotv") {
        paymentItem.innerHTML = `
        <option value="jimonth">Jinja- Monthly (N1,900.00)</option>
        <option value="jomonth">Jolli- Monthly (N2,800.00)</option>
        <option value="maxmonth">Max- Monthly (N4,150.00)</option>
        <option value="smmonth">Smallie- Monthly (N900.00)</option>
        <option value="sumonth">SUPA- Monthly (N1,900.00)</option>
        <option value="smquart">Smallie- Quarterly (N2,400.00)</option>
        <option value="smann">Smallie- Annually (N7,000.00)</option>
        <option value="ji4">Jinja- 4 Months (N7,600.00)</option>
        <option value="ji12">Jinja- 12 Months (N22,800.00)</option>
        <option value="jo4">Jolli- 4 Months (N2,000.00)</option>
        <option value="jo12">Jolli- 12 Months (N33,600.00)</option>
        <option value="max4">Max- 4 Month (N16,600.00)</option>
        <option value="max12">Max- 12 Months (N49,800.00)</option>
        <option value="goren">GOTV RENEW- (Fill Amount)</option>
        <option value="gotop">GOTV TOP UP- (Fill Amount)</option>
        `
    } else if (biller.value == "startimes") {
        paymentItem.innerHTML = `
        <option value="bw">Basic (Antena) - Weekly (N550.00)</option>
        <option value="bm">Basic (Antena) - Monthly (N1,700.00)</option>
        <option value="cw">Classic (Antena) - Weekly (N1,150.00)</option>
        <option value="cm">Classic (Antena) - Monthly (N2,500.00)</option>
        <option value="nw">Nova (Antena) - Weekly (N300.00)</option>
        <option value="nm">Nova (Antena) - Monthly (N900.00)</option>
        <option value="sm">Solar-Nova - Monthly (N9,900.00)</option>
        <option value="ssm">Solar-Smart - Monthly (N10,500.00)</option>
        <option value="sssm">Solar-Super - Monthly (N11,400.00)</option>
        <option value="sw">Smart (Dish) - Weekly (N700.00)</option>
        <option value="smm">Smart (Dish) - Monthly (N2,600.00)</option>
        <option value="sw">Super (Dish) - Weekly (N1,500.00)</option>
        <option value="sum">Super (Dish) - Monthly (N4,900.00)</option>
        <option value="ndw">Nova (Dish) - Weekly (N300.00)</option>
        <option value="ndm">Nova (Dish) - Monthly (N900.00)</option>
        <option value="stm">Startimes All inclusive - Monthly (N12,000.00)</option>
        <option value="stre">Startimes Renew - (Fill Amount)</option>
        `
    } else if (biller.value == "DSTV") {
        paymentItem.innerHTML = `
        <option value="padi">Padi - Monthly (N2,150.00)</option>
        <option value="yanga">Yanga - Monthly (N2,950.00)</option>
        <option value="confam">Confam - Monthly (N5,300.00)</option>
        <option value="compactm">Compact - Monthly (N9,000.00)</option>
        <option value="compactp">Compact Plus - Monthly (N14,250.00)</option>
        <option value="premium">Premium (N21,000.00)</option>
        <option value="busi">Business (N2,66g)</option>
        <option value="xtra">Xtraview + PVR Access (N2,900.00)</option>
        <option value="dstv">DSTV RENEW (Fill Amount)</option>
          `
    } else if (biller.value == "Box-DSTV") {
        paymentItem.innerHTML = `
        <option value="Box-DSTV">Box Office Wallet Topup (Fill Amount)</option>
          `

        cableAmount.value = ""
        cableAmount.disabled = false;
    }

    else if (biller.value == "SHOWMAX") {
        paymentItem.innerHTML = `
        <option value="shmob">Showmax Mobile - Monthly (N1,200.00)</option>
        <option value="pm">Pro Mobile - Monthly (N3,200.00)</option>
        <option value="shp">Showmax Pro - Monthly (N6,300.00)</option>
        <option value="shmon">Showmax - Monthly (N2,900.00)</option>
         `
    }

    else if (biller.value == "IROKOtv") {
        paymentItem.innerHTML = `
        <option value="">IROKOtv Plus Web Access (N800.00)</option>
          `

        cableAmount.value = ""
        cableAmount.disabled = false;
    }
    else if (biller.value == "Linda-TV") {
        paymentItem.innerHTML = `
        <option value="1m">1 Month (N1,000.00)</option>
        <option value="3m">3 Month (N3,000.00)</option>
        <option value="6m">6 Month (N5,500.00)</option>
        <option value="12m">12 Month (N10,000.00)</option>
          `
    }

}

biller.addEventListener("change", changeValue);


let changeAmount = () => {
    if (biller.value === "gotv") {
        if (paymentItem.value === "jimonth") {
            cableAmount.value = "N1,900"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "jomonth") {
            cableAmount.value = "N2,800"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "maxmonth") {
            cableAmount.value = "N4,150"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "smmonth") {
            cableAmount.value = "N900"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "sumonth") {
            cableAmount.value = "N1,900"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "smquart") {
            cableAmount.value = "N2,400"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "smann") {
            cableAmount.value = "N7,000"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "ji4") {
            cableAmount.value = "N7,600"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "ji12") {
            cableAmount.value = "N22,800"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "jo4") {
            cableAmount.value = "N2,000"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "jo12") {
            cableAmount.value = "N33,600"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "max4") {
            cableAmount.value = "N16,600"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "max12") {
            cableAmount.value = "N49,800"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "goren") {
            cableAmount.value = ""
            cableAmount.disabled = false;
        } else if (paymentItem.value === "gotop") {
            cableAmount.value = ""
            cableAmount.disabled = false;
        }
    } else if (biller.value === "startimes") {
        if (paymentItem.value === "bw") {
            cableAmount.value = "N550"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "bm") {
            cableAmount.value = "N1,700"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "cw") {
            cableAmount.value = "N1,150"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "cm") {
            cableAmount.value = "N2,500"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "nw") {
            cableAmount.value = "N300"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "nm") {
            cableAmount.value = "N900"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "sm") {
            cableAmount.value = "N9,900"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "ssm") {
            cableAmount.value = "N10,500"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "sssm") {
            cableAmount.value = "N11,400"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "sw") {
            cableAmount.value = "N700"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "smm") {
            cableAmount.value = "N2,600"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "sw") {
            cableAmount.value = "N1,500"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "sum") {
            cableAmount.value = "N4,900"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "ndw") {
            cableAmount.value = "N300"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "ndm") {
            cableAmount.value = "N900"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "stm") {
            cableAmount.value = "N12,000"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "stre") {
            cableAmount.value = ""
            cableAmount.disabled = false;
        }
    } else if (biller.value === "DSTV") {
        if (paymentItem.value === "padi") {
            cableAmount.value = "N2,150"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "yanga") {
            cableAmount.value = "N2,950"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "confam") {
            cableAmount.value = "N5,300"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "compactm") {
            cableAmount.value = "N9,000"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "compactp") {
            cableAmount.value = "N14,250"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "premium") {
            cableAmount.value = "N21,000"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "busi") {
            cableAmount.value = "N2,66g"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "xtra") {
            cableAmount.value = "N2,900"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "dstv") {
            cableAmount.value = ""
            cableAmount.disabled = false;
        }
    } else if (biller.value === "SHOWMAX") {
        if (paymentItem.value === "shmob") {
            cableAmount.value = "N1,200"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "pm") {
            cableAmount.value = "N3,200"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "shp") {
            cableAmount.value = "N6,300"
            cableAmount.disabled = true;
        }else if (paymentItem.value === "shmon") {
            cableAmount.value = "N2,900"
            cableAmount.disabled = true;
        }
    } else if (biller.value === "Linda-TV") {
        if (paymentItem.value === "1m") {
            cableAmount.value = "N1,000"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "3m") {
            cableAmount.value = "N3,000"
            cableAmount.disabled = true;
        } else if (paymentItem.value === "6m") {
            cableAmount.value = "N5,500"
            cableAmount.disabled = true;
        }else if (paymentItem.value === "12m") {
            cableAmount.value = "N10,000"
            cableAmount.disabled = true;
        }
    }
}

paymentItem.addEventListener("change", changeAmount);
