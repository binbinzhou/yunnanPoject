;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-icon02" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M807.276027 688.221514c30.693046-52.757574 86.871533-80.46666 139.874701-74.193793 7.754614-32.979112 11.863189-67.363224 11.863189-102.70822 0-31.18014-3.196809-61.612243-9.272177-90.992387-53.671387 7.099698-110.872157-20.86726-141.772934-74.480318-31.399127-54.475705-26.275433-119.175263 8.236592-162.065096-47.402613-44.045145-104.381325-77.921697-167.466106-98.168834-19.569708 51.91744-73.39459 89.211834-136.739291 89.211834-63.3447 0-117.170606-37.295418-136.739291-89.211834-62.492286 20.056801-118.989021 53.492308-166.123528 96.934726 34.343179 43.029002 39.206954 107.752096 7.586792 162.103982-31.120788 53.493332-88.444355 81.229023-142.091182 73.904197-6.315846 29.927613-9.646708 60.956304-9.646708 92.76373 0 34.716686 3.958148 68.509327 11.446703 100.95018 53.035914-6.071276 109.11514 21.866007 139.599432 74.755588 29.955242 51.972699 26.674523 113.254414-3.659343 156.021449 47.441499 42.877553 104.121406 75.726705 166.69965 95.189989 22.135136-47.161113 73.316819-80.190367 132.927475-80.190367 59.610656 0 110.792339 33.029254 132.927475 80.190367 61.994959-19.282159 118.198006-51.701522 165.368328-93.993744C780.143063 801.355177 777.113053 740.067322 807.276027 688.221514zM512 705.689351c-107.346867 0-194.368826-87.021959-194.368826-194.368826s87.021959-194.368826 194.368826-194.368826c107.346867 0 194.368826 87.021959 194.368826 194.368826S619.346867 705.689351 512 705.689351z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shalou2" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M917.71072 896.918673l-6.753821 0-52.630684 0 0-82.9799c0-127.829364-68.27192-242.419192-174.234253-304.609603 105.95517-62.229297 174.234253-176.824241 174.234253-304.624952L858.326215 100.536764l53.17713 0 6.757914 0c21.696138 0 39.305191-17.60803 39.305191-39.301098 0-21.699208-17.609053-39.308261-39.305191-39.308261l-6.757914 0L94.065887 21.927405l-6.752798 0c-21.705348 0-39.310308 17.609053-39.310308 39.299051 0 21.702278 17.60496 39.310308 39.310308 39.310308l6.752798 0 56.758702 0 0 104.167454c0 127.789455 68.266803 242.376213 174.221974 304.608579-105.95517 62.2119-174.222997 176.800705-174.222997 304.625976l0 82.9799L93.520465 896.918673l-6.757914 0c-21.695115 0-39.306214 17.610076-39.306214 39.303144 0 21.697161 17.609053 39.307238 39.306214 39.307238l6.757914 0 817.435411 0 6.754844 0c21.704324 0 39.314401-17.610076 39.314401-39.305191S939.415045 896.918673 917.71072 896.918673zM779.711739 896.918673 229.433948 896.918673l0-82.9799c0-125.665071 84.808548-234.863099 206.466352-266.145569 5.013177-1.057075 9.749038-3.090385 13.950733-5.934153 0.044002-0.029676 0.089028-0.058328 0.13303-0.088004 0.470721-0.321318 0.934279-0.651846 1.38965-0.99363 0.052189-0.039909 0.104377-0.075725 0.155543-0.115634 0.99363-0.74906 1.954515-1.547239 2.876514-2.39249 0.017396-0.016373 0.033769-0.031722 0.051165-0.048095 0.424672-0.391926 0.840134-0.793062 1.248434-1.203408 0.073678-0.073678 0.146333-0.149403 0.218988-0.224104 0.355087-0.36225 0.703011-0.731664 1.044796-1.109264 0.075725-0.081864 0.150426-0.165776 0.226151-0.249687 0.341784-0.385786 0.677429-0.777713 1.004887-1.176802 0.058328-0.069585 0.115634-0.138146 0.172939-0.207731 0.36225-0.448208 0.716314-0.903579 1.060145-1.367137 0.01535-0.021489 0.030699-0.041956 0.046049-0.062422 0.724501-0.983397 1.407046-2.004657 2.040473-3.061732 0.086981-0.144286 0.166799-0.289596 0.251733-0.435928 0.199545-0.343831 0.400113-0.687662 0.589424-1.039679 0.157589-0.289596 0.308015-0.585331 0.457418-0.87902 0.100284-0.195451 0.200568-0.38988 0.297782-0.587378 0.193405-0.393973 0.379647-0.793062 0.559748-1.195222 0.035816-0.077771 0.070608-0.155543 0.105401-0.234337 3.420913-7.731078 4.387937-16.615423 2.159176-25.456788-2.088568-8.287757-6.65149-15.259542-12.695137-20.363793-0.1361-0.115634-0.270153-0.234337-0.407276-0.347924-0.232291-0.189312-0.467651-0.372483-0.703011-0.556679-0.309038-0.242524-0.617054-0.485047-0.932232-0.719384-0.058328-0.042979-0.11768-0.083911-0.176009-0.12689-3.981684-2.918469-8.574283-5.139044-13.658068-6.420223C314.96802 440.423825 229.435994 330.836941 229.435994 204.704219L229.435994 100.536764l550.274722 0 0 104.167454c0 126.132722-85.521792 235.719606-207.967542 266.534426-19.221784 4.805446-31.53625 23.006993-29.500894 42.172495 0.007163 0.065492 0.016373 0.12996 0.022513 0.195451 0.062422 0.559748 0.13303 1.119497 0.220011 1.679245 0.020466 0.132006 0.046049 0.261966 0.067538 0.391926 0.082888 0.50142 0.168846 1.001817 0.272199 1.503237 0.026606 0.134053 0.061398 0.264013 0.090051 0.398066 0.096191 0.444115 0.188288 0.889253 0.299829 1.333368 0.166799 0.660032 0.355087 1.306762 0.552585 1.950422 0.021489 0.069585 0.046049 0.140193 0.067538 0.209778 0.163729 0.521886 0.336668 1.039679 0.520863 1.549286 0.029676 0.081864 0.061398 0.161682 0.091074 0.243547 0.188288 0.5137 0.38681 1.02126 0.594541 1.520633 0.024559 0.060375 0.050142 0.119727 0.074701 0.180102 0.227174 0.539282 0.465604 1.073448 0.714268 1.599428 0.00921 0.01842 0.017396 0.035816 0.025583 0.054235 1.089821 2.292206 2.384303 4.445242 3.857864 6.439666 0.007163 0.008186 0.014326 0.01842 0.020466 0.025583 0.333598 0.451278 0.676405 0.893346 1.028423 1.329275 0.113587 0.140193 0.231267 0.277316 0.346901 0.417509 0.239454 0.289596 0.483001 0.576121 0.730641 0.855484 0.186242 0.211824 0.373507 0.421602 0.564865 0.629333 0.167822 0.184195 0.338714 0.363274 0.51063 0.543376 0.258896 0.272199 0.51984 0.541329 0.786922 0.805342 0.057305 0.056282 0.11461 0.11154 0.172939 0.167822 3.634784 3.560082 7.995091 6.445806 12.93152 8.404414 0.186242 0.073678 0.37146 0.146333 0.557702 0.217964 0.315178 0.11768 0.630357 0.23536 0.950651 0.347924 0.36532 0.12996 0.735757 0.249687 1.105171 0.367367 0.176009 0.056282 0.347924 0.115634 0.524956 0.169869 0.62217 0.190335 1.251503 0.363274 1.883907 0.521886 122.378212 30.745235 207.883631 140.318816 207.883631 266.477121L779.712763 896.918673z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-guanbi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M557.312 513.248l265.28-263.904c12.544-12.48 12.608-32.704 0.128-45.248-12.512-12.576-32.704-12.608-45.248-0.128l-265.344 263.936-263.04-263.84C236.64 191.584 216.384 191.52 203.84 204 191.328 216.48 191.296 236.736 203.776 249.28l262.976 263.776L201.6 776.8c-12.544 12.48-12.608 32.704-0.128 45.248 6.24 6.272 14.464 9.44 22.688 9.44 8.16 0 16.32-3.104 22.56-9.312l265.216-263.808 265.44 266.24c6.24 6.272 14.432 9.408 22.656 9.408 8.192 0 16.352-3.136 22.592-9.344 12.512-12.48 12.544-32.704 0.064-45.248L557.312 513.248z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiahao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M895.955484 460.757942l-326.173098 0L569.782386 134.597511c0-23.736611-19.243057-42.97886-42.980664-42.97886s-42.980664 19.24225-42.980664 42.97886l0 326.160431-326.174121 0c-23.737607 0-42.980664 19.24225-42.980664 42.97886s19.243057 42.97886 42.980664 42.97886l326.174121 0 0 326.159408c0 23.736611 19.243057 42.97886 42.980664 42.97886s42.980664-19.24225 42.980664-42.97886L569.782386 546.715663l326.173098 0c23.737607 0 42.980664-19.24225 42.980664-42.97886S919.693091 460.757942 895.955484 460.757942zM531.954285 144.573723"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shangyiye" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M206.868687 511.930182l270.828606-270.840242-0.085333-0.080162 16.717576-16.718869c12.889212-12.889212 33.782949-12.889212 46.661818 0 12.889212 12.880162 12.889212 33.772606 0 46.663111L299.929859 512.020687l242.241939 242.241939c12.88404 12.878869 12.88404 33.773899 0 46.661818-12.887919 12.88404-33.777778 12.88404-46.661818 0l-26.989899-26.989899 0.182303-0.166788L206.868687 511.930182 206.868687 511.930182zM470.833131 511.930182l270.833778-270.840242-0.08404-0.080162 16.716283-16.718869c12.889212-12.889212 33.782949-12.889212 46.661818 0 12.889212 12.880162 12.889212 33.772606 0 46.663111L563.899475 512.020687 806.141414 754.262626c12.88404 12.878869 12.88404 33.773899 0 46.661818-12.887919 12.88404-33.782949 12.88404-46.660525 0l-26.995071-26.989899 0.186182-0.166788L470.833131 511.930182 470.833131 511.930182zM470.833131 511.930182"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiayiye" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M815.804768 513.282586 544.976162 784.122828l0.085333 0.080162-16.717576 16.718869c-12.889212 12.889212-33.781657 12.889212-46.661818 0-12.889212-12.880162-12.889212-33.772606 0-46.663111l241.060202-241.064081L480.501657 270.951434c-12.88404-12.878869-12.88404-33.773899 0-46.661818 12.887919-12.88404 33.777778-12.88404 46.660525 0l26.989899 26.989899-0.182303 0.166788L815.804768 513.282586 815.804768 513.282586zM551.83903 513.282586 281.006545 784.122828l0.085333 0.080162-16.716283 16.718869c-12.889212 12.889212-33.782949 12.889212-46.661818 0-12.889212-12.880162-12.889212-33.772606 0-46.663111l241.060202-241.064081L216.53204 270.951434c-12.88404-12.878869-12.88404-33.773899 0-46.661818 12.887919-12.88404 33.782949-12.88404 46.660525 0l26.995071 26.989899-0.186182 0.166788L551.83903 513.282586 551.83903 513.282586zM551.83903 513.282586"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yousanjiao-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M639.694 767.796v-512.412l-320.259 256.206 320.259 256.205z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yousanjiao" viewBox="0 0 1000 1000">' +
    '' +
    '<path d="M362.231 790.417v-499.661l298.81 250.227-298.81 249.434zM362.231 790.417z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zhuzhuangtukuai" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M864 512l-64 0c-35.2 0-64 28.8-64 64l0 384c0 35.2 28.8 64 64 64l64 0c35.2 0 64-28.8 64-64L928 576C928 540.8 899.2 512 864 512z"  ></path>' +
    '' +
    '<path d="M544 0l-64 0c-35.2 0-64 28.8-64 64l0 896c0 35.2 28.8 64 64 64l64 0c35.2 0 64-28.8 64-64L608 64C608 28.8 579.2 0 544 0z"  ></path>' +
    '' +
    '<path d="M224 288l-64 0c-35.2 0-64 28.8-64 64l0 608c0 35.2 28.8 64 64 64l64 0c35.2 0 64-28.8 64-64L288 352C288 316.8 259.2 288 224 288z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shouyeshouye" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1007.072 542.48 512.016 79.152 16.96 541.12c-9.68 9.04-10.224 24.24-1.168 33.92 9.04 9.68 24.24 10.224 33.92 1.168l462.272-431.36 462.288 432.672c4.64 4.336 10.528 6.48 16.4 6.48 6.4 0 12.8-2.544 17.52-7.6C1017.248 566.72 1016.752 551.536 1007.072 542.48zM856 552c-13.248 0-24 10.752-24 24l0 368L640 944 640 688 384 688l0 256L192 944 192 576c0-13.248-10.736-24-24-24S144 562.752 144 576l0 416 288 0L432 736l160 0 0 256 288 0L880 576C880 562.752 869.248 552 856 552zM688 208l144 0 0 128c0 13.264 10.752 24 24 24S880 349.264 880 336L880 160 688 160c-13.248 0-24 10.736-24 24S674.752 208 688 208z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-times" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.913993 63.989249c-247.012263 0-447.924744 200.912481-447.924744 447.924744s200.912481 447.924744 447.924744 447.924744 447.924744-200.912481 447.924744-447.924744S758.926256 63.989249 511.913993 63.989249zM511.913993 895.677474c-211.577356 0-383.763481-172.186125-383.763481-383.763481 0-211.577356 172.014111-383.763481 383.763481-383.763481s383.763481 172.014111 383.763481 383.763481S723.491349 895.677474 511.913993 895.677474z"  ></path>' +
    '' +
    '<path d="M672.05913 511.913993l-159.973123 0L512.086007 288.123635c0-17.717453-14.277171-32.166639-31.994625-32.166639-17.717453 0-31.994625 14.449185-31.994625 32.166639l0 255.956996c0 17.717453 14.277171 31.994625 31.994625 31.994625l191.967747 0c17.717453 0 32.166639-14.277171 32.166639-31.994625C704.053754 526.191164 689.604569 511.913993 672.05913 511.913993z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuofangdajing" viewBox="0 0 2085 1024">' +
    '' +
    '<path d="M878.687361 780.298596 662.988914 562.329638c-2.27051-2.27051-5.297857-4.54102-7.568367-6.81153 36.32816-56.005913 57.519586-123.364375 57.519586-196.020695 0-198.291205-159.692535-359.497413-356.470067-359.497413-196.777531 0-356.470067 161.206208-356.470067 359.497413 0 198.291205 159.692535 359.497413 356.470067 359.497413 71.899483 0 138.501109-21.191426 194.507021-58.276423 2.27051 3.027347 3.784183 5.297857 6.054693 7.568367l215.698448 217.212121c14.379897 15.136733 34.05765 21.948263 52.978566 21.948263 18.920916 0 38.59867-7.568367 52.978566-21.948263C908.203991 857.495935 908.203991 809.815225 878.687361 780.298596M356.470067 606.226164c-134.716925 0-243.701404-110.498152-243.701404-245.971914 0-135.473762 109.741316-245.971914 243.701404-245.971914 134.716925 0 243.701404 110.498152 243.701404 245.971914C600.171471 495.728012 491.186992 606.226164 356.470067 606.226164"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wenhao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M545.810037 1016.537028 355.596857 1016.537028 355.596857 826.322825 545.810037 826.322825 545.810037 1016.537028Z"  ></path>' +
    '' +
    '<path d="M768.360715 418.059468c-23.717168 37.436634-74.572416 88.397283-152.188144 153.077398-40.179095 33.31578-65.174372 59.969836-74.871221 80.358189-9.608845 20.284999-14.012132 56.635905-13.233396 108.9729L355.596857 760.467955c-0.494257-24.898063-0.687662-39.98569-0.687662-45.375443 0-55.95643 9.210779-102.019535 27.730575-138.177036 18.422581-36.066427 55.470359-76.635401 111.035886-121.80823 55.461149-45.084824 88.687902-74.677816 99.565646-88.592734 16.755616-22.145369 24.987091-46.549176 24.987091-73.106018 0-37.045731-14.504342-68.694545-44.097334-95.155197-29.698392-26.361391-69.480444-39.49041-119.65724-39.49041-48.313356 0-88.687902 13.815657-121.226992 41.254589-32.432667 27.53717-54.876842 69.480444-67.027579 126.027321l-174.729533-21.756513c4.993734-80.756255 39.297005-149.353586 103.290481-205.796086C258.580267 42.044582 342.460676 13.820774 446.24439 13.820774c109.166305 0 196.090027 28.612665 260.672928 85.652775 64.582901 57.130162 96.823186 123.573433 96.823186 199.423959C803.739481 340.840782 791.882432 380.527666 768.360715 418.059468L768.360715 418.059468z"  ></path>' +
    '' +
    '<path d="M768.360715 418.059468"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiazai" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M534.929 299.127c-63.609 0-115.378-51.743-115.378-115.355 0-63.585 51.77-115.355 115.378-115.355s115.355 51.744 115.355 115.355-51.744 115.355-115.355 115.355v0zM289.303 390.727c-58.096 0-105.384-47.265-105.384-105.385s47.288-105.385 105.384-105.385 105.385 47.265 105.385 105.385c0 58.094-47.289 105.385-105.385 105.385zM184.929 629.114c-51.252 0-92.929-41.676-92.929-92.928 0-51.228 41.677-92.904 92.929-92.904 51.228 0 92.903 41.678 92.903 92.904 0 51.252-41.677 92.929-92.903 92.928v0zM289.303 865.288c-43.448 0-78.799-35.349-78.799-78.8 0-43.448 35.374-78.798 78.799-78.798s78.799 35.349 78.799 78.798c0 43.45-35.35 78.8-78.799 78.8zM534.929 955.583c-37.958 0-68.829-30.87-68.829-68.829 0-37.96 30.87-68.828 68.829-68.828s68.828 30.868 68.828 68.828c0 37.959-30.869 68.829-68.828 68.829zM784.274 839.245c-30.623 0-55.561-24.912-55.561-55.56s24.938-55.56 55.561-55.56c30.623 0 55.559 24.911 55.559 55.56-0.001 30.647-24.937 55.56-55.559 55.56zM886.384 582.194c-25.134 0-45.59-20.456-45.59-45.59s20.456-45.591 45.59-45.591c25.134 0 45.616 20.456 45.616 45.591 0 25.133-20.483 45.59-45.616 45.59zM748.9 288.762c0 19.537 15.837 35.374 35.373 35.374s35.374-15.838 35.374-35.374c0-19.537-15.838-35.374-35.374-35.374s-35.373 15.836-35.373 35.374z" fill="#8a8a8a" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zititubiao-68" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M926.976 296.576l-475.2 518.4a64.832 64.832 0 0 1-46.336 20.992h-1.408a64.64 64.64 0 0 1-45.824-19.008l-259.2-259.2a64.768 64.768 0 1 1 91.648-91.648l211.328 211.328 429.44-468.544a64.832 64.832 0 1 1 95.552 87.68z" fill="#929292" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiasanjiao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M731.648 421.888c3.584-4.608 5.632-9.728 5.632-15.872 0-13.824-10.752-25.6-24.064-25.6h-412.672c-13.312 0-24.064 11.264-24.064 25.6 0 6.656 2.56 12.8 6.144 17.408l205.312 254.464c4.608 6.144 11.264 10.24 18.944 10.24s14.336-3.584 18.944-9.728l205.824-256.512z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)