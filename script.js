const currencyData = {
    "AED": { symbol: "د.إ", name: "UAE Dirham", country: "United Arab Emirates", flag: "AE" },
    "AFN": { symbol: "؋", name: "Afghan Afghani", country: "Afghanistan", flag: "AF" },
    "ALL": { symbol: "L", name: "Albanian Lek", country: "Albania", flag: "AL" },
    "AMD": { symbol: "֏", name: "Armenian Dram", country: "Armenia", flag: "AM" },
    "ANG": { symbol: "ƒ", name: "Netherlands Antillean Guilder", country: "Curaçao", flag: "CW" },
    "AOA": { symbol: "Kz", name: "Angolan Kwanza", country: "Angola", flag: "AO" },
    "ARS": { symbol: "$", name: "Argentine Peso", country: "Argentina", flag: "AR" },
    "AUD": { symbol: "$", name: "Australian Dollar", country: "Australia", flag: "AU" },
    "AWG": { symbol: "ƒ", name: "Aruban Florin", country: "Aruba", flag: "AW" },
    "AZN": { symbol: "₼", name: "Azerbaijani Manat", country: "Azerbaijan", flag: "AZ" },
    "BAM": { symbol: "KM", name: "Bosnia-Herzegovina Convertible Mark", country: "Bosnia and Herzegovina", flag: "BA" },
    "BBD": { symbol: "$", name: "Barbadian Dollar", country: "Barbados", flag: "BB" },
    "BDT": { symbol: "৳", name: "Bangladeshi Taka", country: "Bangladesh", flag: "BD" },
    "BGN": { symbol: "лв", name: "Bulgarian Lev", country: "Bulgaria", flag: "BG" },
    "BHD": { symbol: ".د.ب", name: "Bahraini Dinar", country: "Bahrain", flag: "BH" },
    "BIF": { symbol: "FBu", name: "Burundian Franc", country: "Burundi", flag: "BI" },
    "BMD": { symbol: "$", name: "Bermudian Dollar", country: "Bermuda", flag: "BM" },
    "BND": { symbol: "$", name: "Brunei Dollar", country: "Brunei", flag: "BN" },
    "BOB": { symbol: "Bs.", name: "Bolivian Boliviano", country: "Bolivia", flag: "BO" },
    "BRL": { symbol: "R$", name: "Brazilian Real", country: "Brazil", flag: "BR" },
    "BSD": { symbol: "$", name: "Bahamian Dollar", country: "Bahamas", flag: "BS" },
    "BTN": { symbol: "Nu.", name: "Bhutanese Ngultrum", country: "Bhutan", flag: "BT" },
    "BWP": { symbol: "P", name: "Botswana Pula", country: "Botswana", flag: "BW" },
    "BYN": { symbol: "Br", name: "Belarusian Ruble", country: "Belarus", flag: "BY" },
    "BZD": { symbol: "BZ$", name: "Belize Dollar", country: "Belize", flag: "BZ" },
    "CAD": { symbol: "$", name: "Canadian Dollar", country: "Canada", flag: "CA" },
    "CDF": { symbol: "FC", name: "Congolese Franc", country: "DR Congo", flag: "CD" },
    "CHF": { symbol: "CHF", name: "Swiss Franc", country: "Switzerland", flag: "CH" },
    "CLP": { symbol: "$", name: "Chilean Peso", country: "Chile", flag: "CL" },
    "CNY": { symbol: "¥", name: "Chinese Yuan", country: "China", flag: "CN" },
    "COP": { symbol: "$", name: "Colombian Peso", country: "Colombia", flag: "CO" },
    "CRC": { symbol: "₡", name: "Costa Rican Colón", country: "Costa Rica", flag: "CR" },
    "CUP": { symbol: "$", name: "Cuban Peso", country: "Cuba", flag: "CU" },
    "CVE": { symbol: "$", name: "Cape Verdean Escudo", country: "Cape Verde", flag: "CV" },
    "CZK": { symbol: "Kč", name: "Czech Koruna", country: "Czech Republic", flag: "CZ" },
    "DJF": { symbol: "Fdj", name: "Djiboutian Franc", country: "Djibouti", flag: "DJ" },
    "DKK": { symbol: "kr", name: "Danish Krone", country: "Denmark", flag: "DK" },
    "DOP": { symbol: "RD$", name: "Dominican Peso", country: "Dominican Republic", flag: "DO" },
    "DZD": { symbol: "د.ج", name: "Algerian Dinar", country: "Algeria", flag: "DZ" },
    "EGP": { symbol: "£", name: "Egyptian Pound", country: "Egypt", flag: "EG" },
    "ERN": { symbol: "Nfk", name: "Eritrean Nakfa", country: "Eritrea", flag: "ER" },
    "ETB": { symbol: "Br", name: "Ethiopian Birr", country: "Ethiopia", flag: "ET" },
    "EUR": { symbol: "€", name: "Euro", country: "European Union", flag: "EU" },
    "FJD": { symbol: "$", name: "Fijian Dollar", country: "Fiji", flag: "FJ" },
    "FKP": { symbol: "£", name: "Falkland Islands Pound", country: "Falkland Islands", flag: "FK" },
    "GBP": { symbol: "£", name: "British Pound", country: "United Kingdom", flag: "GB" },
    "GEL": { symbol: "₾", name: "Georgian Lari", country: "Georgia", flag: "GE" },
    "GHS": { symbol: "₵", name: "Ghanaian Cedi", country: "Ghana", flag: "GH" },
    "GIP": { symbol: "£", name: "Gibraltar Pound", country: "Gibraltar", flag: "GI" },
    "GMD": { symbol: "D", name: "Gambian Dalasi", country: "Gambia", flag: "GM" },
    "GNF": { symbol: "FG", name: "Guinean Franc", country: "Guinea", flag: "GN" },
    "GTQ": { symbol: "Q", name: "Guatemalan Quetzal", country: "Guatemala", flag: "GT" },
    "GYD": { symbol: "$", name: "Guyanese Dollar", country: "Guyana", flag: "GY" },
    "HKD": { symbol: "$", name: "Hong Kong Dollar", country: "Hong Kong", flag: "HK" },
    "HNL": { symbol: "L", name: "Honduran Lempira", country: "Honduras", flag: "HN" },
    "HRK": { symbol: "kn", name: "Croatian Kuna", country: "Croatia", flag: "HR" },
    "HTG": { symbol: "G", name: "Haitian Gourde", country: "Haiti", flag: "HT" },
    "HUF": { symbol: "Ft", name: "Hungarian Forint", country: "Hungary", flag: "HU" },
    "IDR": { symbol: "Rp", name: "Indonesian Rupiah", country: "Indonesia", flag: "ID" },
    "ILS": { symbol: "₪", name: "Israeli New Shekel", country: "Israel", flag: "IL" },
    "INR": { symbol: "₹", name: "Indian Rupee", country: "India", flag: "IN" },
    "IQD": { symbol: "ع.د", name: "Iraqi Dinar", country: "Iraq", flag: "IQ" },
    "IRR": { symbol: "﷼", name: "Iranian Rial", country: "Iran", flag: "IR" },
    "ISK": { symbol: "kr", name: "Icelandic Króna", country: "Iceland", flag: "IS" },
    "JMD": { symbol: "$", name: "Jamaican Dollar", country: "Jamaica", flag: "JM" },
    "JOD": { symbol: "د.ا", name: "Jordanian Dinar", country: "Jordan", flag: "JO" },
    "JPY": { symbol: "¥", name: "Japanese Yen", country: "Japan", flag: "JP" },
    "KES": { symbol: "KSh", name: "Kenyan Shilling", country: "Kenya", flag: "KE" },
    "KGS": { symbol: "с", name: "Kyrgyzstani Som", country: "Kyrgyzstan", flag: "KG" },
    "KHR": { symbol: "៛", name: "Cambodian Riel", country: "Cambodia", flag: "KH" },
    "KMF": { symbol: "CF", name: "Comorian Franc", country: "Comoros", flag: "KM" },
    "KPW": { symbol: "₩", name: "North Korean Won", country: "North Korea", flag: "KP" },
    "KRW": { symbol: "₩", name: "South Korean Won", country: "South Korea", flag: "KR" },
    "KWD": { symbol: "د.ك", name: "Kuwaiti Dinar", country: "Kuwait", flag: "KW" },
    "KYD": { symbol: "$", name: "Cayman Islands Dollar", country: "Cayman Islands", flag: "KY" },
    "KZT": { symbol: "₸", name: "Kazakhstani Tenge", country: "Kazakhstan", flag: "KZ" },
    "LAK": { symbol: "₭", name: "Lao Kip", country: "Laos", flag: "LA" },
    "LBP": { symbol: "ل.ل", name: "Lebanese Pound", country: "Lebanon", flag: "LB" },
    "LKR": { symbol: "Rs", name: "Sri Lankan Rupee", country: "Sri Lanka", flag: "LK" },
    "LRD": { symbol: "$", name: "Liberian Dollar", country: "Liberia", flag: "LR" },
    "LSL": { symbol: "L", name: "Lesotho Loti", country: "Lesotho", flag: "LS" },
    "LYD": { symbol: "ل.د", name: "Libyan Dinar", country: "Libya", flag: "LY" },
    "MAD": { symbol: "د.م.", name: "Moroccan Dirham", country: "Morocco", flag: "MA" },
    "MDL": { symbol: "L", name: "Moldovan Leu", country: "Moldova", flag: "MD" },
    "MGA": { symbol: "Ar", name: "Malagasy Ariary", country: "Madagascar", flag: "MG" },
    "MKD": { symbol: "ден", name: "Macedonian Denar", country: "North Macedonia", flag: "MK" },
    "MMK": { symbol: "K", name: "Myanmar Kyat", country: "Myanmar", flag: "MM" },
    "MNT": { symbol: "₮", name: "Mongolian Tögrög", country: "Mongolia", flag: "MN" },
    "MOP": { symbol: "P", name: "Macanese Pataca", country: "Macau", flag: "MO" },
    "MRU": { symbol: "UM", name: "Mauritanian Ouguiya", country: "Mauritania", flag: "MR" },
    "MUR": { symbol: "₨", name: "Mauritian Rupee", country: "Mauritius", flag: "MU" },
    "MVR": { symbol: ".ރ", name: "Maldivian Rufiyaa", country: "Maldives", flag: "MV" },
    "MWK": { symbol: "MK", name: "Malawian Kwacha", country: "Malawi", flag: "MW" },
    "MXN": { symbol: "$", name: "Mexican Peso", country: "Mexico", flag: "MX" },
    "MYR": { symbol: "RM", name: "Malaysian Ringgit", country: "Malaysia", flag: "MY" },
    "MZN": { symbol: "MT", name: "Mozambican Metical", country: "Mozambique", flag: "MZ" },
    "NAD": { symbol: "$", name: "Namibian Dollar", country: "Namibia", flag: "NA" },
    "NGN": { symbol: "₦", name: "Nigerian Naira", country: "Nigeria", flag: "NG" },
    "NIO": { symbol: "C$", name: "Nicaraguan Córdoba", country: "Nicaragua", flag: "NI" },
    "NOK": { symbol: "kr", name: "Norwegian Krone", country: "Norway", flag: "NO" },
    "NPR": { symbol: "₨", name: "Nepalese Rupee", country: "Nepal", flag: "NP" },
    "NZD": { symbol: "$", name: "New Zealand Dollar", country: "New Zealand", flag: "NZ" },
    "OMR": { symbol: "ر.ع.", name: "Omani Rial", country: "Oman", flag: "OM" },
    "PAB": { symbol: "B/.", name: "Panamanian Balboa", country: "Panama", flag: "PA" },
    "PEN": { symbol: "S/", name: "Peruvian Sol", country: "Peru", flag: "PE" },
    "PGK": { symbol: "K", name: "Papua New Guinean Kina", country: "Papua New Guinea", flag: "PG" },
    "PHP": { symbol: "₱", name: "Philippine Peso", country: "Philippines", flag: "PH" },
    "PKR": { symbol: "₨", name: "Pakistani Rupee", country: "Pakistan", flag: "PK" },
    "PLN": { symbol: "zł", name: "Polish Złoty", country: "Poland", flag: "PL" },
    "PYG": { symbol: "₲", name: "Paraguayan Guaraní", country: "Paraguay", flag: "PY" },
    "QAR": { symbol: "ر.ق", name: "Qatari Riyal", country: "Qatar", flag: "QA" },
    "RON": { symbol: "lei", name: "Romanian Leu", country: "Romania", flag: "RO" },
    "RSD": { symbol: "дин", name: "Serbian Dinar", country: "Serbia", flag: "RS" },
    "RUB": { symbol: "₽", name: "Russian Ruble", country: "Russia", flag: "RU" },
    "RWF": { symbol: "FRw", name: "Rwandan Franc", country: "Rwanda", flag: "RW" },
    "SAR": { symbol: "ر.س", name: "Saudi Riyal", country: "Saudi Arabia", flag: "SA" },
    "SBD": { symbol: "$", name: "Solomon Islands Dollar", country: "Solomon Islands", flag: "SB" },
    "SCR": { symbol: "₨", name: "Seychellois Rupee", country: "Seychelles", flag: "SC" },
    "SDG": { symbol: "ج.س.", name: "Sudanese Pound", country: "Sudan", flag: "SD" },
    "SEK": { symbol: "kr", name: "Swedish Krona", country: "Sweden", flag: "SE" },
    "SGD": { symbol: "$", name: "Singapore Dollar", country: "Singapore", flag: "SG" },
    "SHP": { symbol: "£", name: "Saint Helena Pound", country: "Saint Helena", flag: "SH" },
    "SLL": { symbol: "Le", name: "Sierra Leonean Leone", country: "Sierra Leone", flag: "SL" },
    "SOS": { symbol: "Sh", name: "Somali Shilling", country: "Somalia", flag: "SO" },
    "SRD": { symbol: "$", name: "Surinamese Dollar", country: "Suriname", flag: "SR" },
    "SSP": { symbol: "£", name: "South Sudanese Pound", country: "South Sudan", flag: "SS" },
    "STN": { symbol: "Db", name: "São Tomé and Príncipe Dobra", country: "São Tomé and Príncipe", flag: "ST" },
    "SVC": { symbol: "$", name: "Salvadoran Colón", country: "El Salvador", flag: "SV" },
    "SYP": { symbol: "£", name: "Syrian Pound", country: "Syria", flag: "SY" },
    "SZL": { symbol: "L", name: "Swazi Lilangeni", country: "Eswatini", flag: "SZ" },
    "THB": { symbol: "฿", name: "Thai Baht", country: "Thailand", flag: "TH" },
    "TJS": { symbol: "ЅМ", name: "Tajikistani Somoni", country: "Tajikistan", flag: "TJ" },
    "TMT": { symbol: "m", name: "Turkmenistani Manat", country: "Turkmenistan", flag: "TM" },
    "TND": { symbol: "د.ت", name: "Tunisian Dinar", country: "Tunisia", flag: "TN" },
    "TOP": { symbol: "T$", name: "Tongan Paʻanga", country: "Tonga", flag: "TO" },
    "TRY": { symbol: "₺", name: "Turkish Lira", country: "Turkey", flag: "TR" },
    "TTD": { symbol: "$", name: "Trinidad and Tobago Dollar", country: "Trinidad and Tobago", flag: "TT" },
    "TWD": { symbol: "NT$", name: "New Taiwan Dollar", country: "Taiwan", flag: "TW" },
    "TZS": { symbol: "Sh", name: "Tanzanian Shilling", country: "Tanzania", flag: "TZ" },
    "UAH": { symbol: "₴", name: "Ukrainian Hryvnia", country: "Ukraine", flag: "UA" },
    "UGX": { symbol: "USh", name: "Ugandan Shilling", country: "Uganda", flag: "UG" },
    "USD": { symbol: "$", name: "US Dollar", country: "United States", flag: "US" },
    "UYU": { symbol: "$", name: "Uruguayan Peso", country: "Uruguay", flag: "UY" },
    "UZS": { symbol: "soʻm", name: "Uzbekistani Soʻm", country: "Uzbekistan", flag: "UZ" },
    "VES": { symbol: "Bs.", name: "Venezuelan Bolívar", country: "Venezuela", flag: "VE" },
    "VND": { symbol: "₫", name: "Vietnamese Đồng", country: "Vietnam", flag: "VN" },
    "VUV": { symbol: "Vt", name: "Vanuatu Vatu", country: "Vanuatu", flag: "VU" },
    "WST": { symbol: "T", name: "Samoan Tala", country: "Samoa", flag: "WS" },
    "XAF": { symbol: "FCFA", name: "CFA Franc BEAC", country: "Central Africa", flag: "CF" },
    "XCD": { symbol: "$", name: "East Caribbean Dollar", country: "Eastern Caribbean", flag: "AG" },
    "XOF": { symbol: "CFA", name: "CFA Franc BCEAO", country: "West Africa", flag: "BF" },
    "XPF": { symbol: "₣", name: "CFP Franc", country: "French Pacific", flag: "PF" },
    "YER": { symbol: "﷼", name: "Yemeni Rial", country: "Yemen", flag: "YE" },
    "ZAR": { symbol: "R", name: "South African Rand", country: "South Africa", flag: "ZA" },
    "ZMW": { symbol: "ZK", name: "Zambian Kwacha", country: "Zambia", flag: "ZM" },
    "ZWL": { symbol: "$", name: "Zimbabwean Dollar", country: "Zimbabwe", flag: "ZW" }
};  
// DOM Elements
const BASE_URL = "https://api.exchangerate-api.com/v4/latest";
const amountInput = document.getElementById('amountInput');
const currencySymbol = document.getElementById('currencySymbol');
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const fromFlag = document.getElementById('fromFlag');
const toFlag = document.getElementById('toFlag');
const fromCountry = document.getElementById('fromCountry');
const toCountry = document.getElementById('toCountry');
const rateInfo = document.getElementById('rateInfo');
const exchangeRate = document.getElementById('exchangeRate');
const fromCurrencyCode = document.getElementById('fromCurrencyCode');
const toCurrencyCode = document.getElementById('toCurrencyCode');
const finalAmount = document.getElementById('finalAmount');
const swapBtn = document.getElementById('swapBtn');
const convertBtn = document.getElementById('convertBtn');
const lastUpdatedEl = document.getElementById('lastUpdated');

// Store current exchange rate
let currentRate = 0;
let lastFromCurrency = '';
let lastToCurrency = '';

// Initialize the app
function init() {
    populateCurrencyOptions();
    setDefaultCurrencies();
    updateDisplay();
    fetchExchangeRate();
    setLastUpdatedTime();
    
    // Event listeners
    fromCurrency.addEventListener('change', () => {
        updateFromDisplay();
        if (fromCurrency.value !== lastFromCurrency || toCurrency.value !== lastToCurrency) {
            fetchExchangeRate();
        }
    });
    
    toCurrency.addEventListener('change', () => {
        updateToDisplay();
        if (fromCurrency.value !== lastFromCurrency || toCurrency.value !== lastToCurrency) {
            fetchExchangeRate();
        }
    });
    
    swapBtn.addEventListener('click', swapCurrencies);
    convertBtn.addEventListener('click', calculateFinalAmount);
}

// Populate currency dropdowns
function populateCurrencyOptions() {
    Object.entries(currencyData).forEach(([code, data]) => {
        const fromOption = document.createElement('option');
        fromOption.value = code;
        fromOption.textContent = `${code} - ${data.name}`;
        fromOption.dataset.flag = data.flag;
        fromCurrency.appendChild(fromOption);
        
        const toOption = document.createElement('option');
        toOption.value = code;
        toOption.textContent = `${code} - ${data.name}`;
        toOption.dataset.flag = data.flag;
        toCurrency.appendChild(toOption);
    });
}

// Set default currencies (USD to PKR)
function setDefaultCurrencies() {
    fromCurrency.value = 'USD';
    toCurrency.value = 'PKR';
    lastFromCurrency = 'USD';
    lastToCurrency = 'PKR';
}

// Update all display elements
function updateDisplay() {
    updateFromDisplay();
    updateToDisplay();
}

// Update "from" currency display
function updateFromDisplay() {
    const currencyCode = fromCurrency.value;
    const currencyInfo = currencyData[currencyCode];
    
    if (currencyInfo) {
        currencySymbol.textContent = currencyInfo.symbol;
        fromFlag.src = `https://flagsapi.com/${currencyInfo.flag}/flat/64.png`;
        fromFlag.alt = `${currencyInfo.country} Flag`;
        fromFlag.onerror = function() {
            this.src = 'https://flagsapi.com/UN/flat/64.png';
        };
        fromCountry.textContent = currencyInfo.country;
        fromCurrencyCode.textContent = currencyCode;
    }
}

// Update "to" currency display
function updateToDisplay() {
    const currencyCode = toCurrency.value;
    const currencyInfo = currencyData[currencyCode];
    
    if (currencyInfo) {
        toFlag.src = `https://flagsapi.com/${currencyInfo.flag}/flat/64.png`;
        toFlag.alt = `${currencyInfo.country} Flag`;
        toFlag.onerror = function() {
            this.src = 'https://flagsapi.com/UN/flat/64.png';
        };
        toCountry.textContent = currencyInfo.country;
        toCurrencyCode.textContent = currencyCode;
        document.querySelector('.final-amount .symbol').textContent = currencyInfo.symbol;
    }
}

// Swap currencies
function swapCurrencies() {
    [fromCurrency.value, toCurrency.value] = [toCurrency.value, fromCurrency.value];
    updateDisplay();
    fetchExchangeRate();
}

// Set last updated time
function setLastUpdatedTime() {
    const now = new Date();
    const options = { 
        hour: '2-digit', 
        minute: '2-digit', 
        day: 'numeric', 
        month: 'short', 
        year: 'numeric',
        timeZone: 'Asia/Karachi'
    };
    lastUpdatedEl.textContent = `Last updated: ${now.toLocaleDateString('en-PK', options)}`;
}

// Fetch exchange rate
async function fetchExchangeRate() {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    
    // Update last currencies
    lastFromCurrency = from;
    lastToCurrency = to;
    
    // Show loading state
    exchangeRate.textContent = '...';
    convertBtn.disabled = true;
    
    try {
        const response = await fetch(`${BASE_URL}/${from}`);
        const data = await response.json();
        
        if (!data.rates) {
            throw new Error('Failed to fetch exchange rates');
        }
        
        currentRate = data.rates[to];
        if (!currentRate) {
            throw new Error('Exchange rate not available');
        }
        
        exchangeRate.textContent = currentRate.toFixed(4);
    } catch (error) {
        console.error('Error:', error);
        exchangeRate.textContent = '0.00';
        currentRate = 0;
    } finally {
        convertBtn.disabled = false;
    }
}

// Calculate final amount ONLY when Convert button is clicked
function calculateFinalAmount() {
    if (currentRate <= 0) {
        finalAmount.querySelector('.amount').textContent = '0.00';
        return;
    }
    
    const amount = parseFloat(amountInput.value) || 0;
    const convertedAmount = (amount * currentRate).toFixed(2);
    finalAmount.querySelector('.amount').textContent = convertedAmount.toLocaleString();
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);