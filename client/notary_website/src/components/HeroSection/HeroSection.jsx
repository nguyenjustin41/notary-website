import React from 'react';

const HeroSection = () => {
  return (
      <div id="home" className="my-[10%] md:mt-[5%]">
          <div id="hero-div" className="flex bg-grey-color justify-center items-center px-[30px] h-[100%] relative z-[1]"> 
          {/* grid grid-cols-2 place-items-center place-content-center */}
              <div id="hero-section" className="mobile-hero-section flex flex-col lg:flex-row items-center justify-center w-full h-full overflow-visible max-w-[1100px]">
                    <div className="h-[100%] w-[100%] flex flex-col justify-center items-center">
                        <h1 className="mobile-hero-header text-center lg:text-left -tracking-[0.64px] text-[48px] text-[#363f41] leading-[52px] mb-[20px] w-[100%] font-semibold px-4">The best mobile <br/> closing experience <br/> guaranteed.</h1>
                        
                        <p className="mobile-hero-text text-center lg:text-left text-[24px] leading-[33px] mb-[25px] font-normal px-4">Reliable and timely service, my closing process delivers the best closing experience to every signer, escrow, and mortgage officer.</p>
                        <div className="lg:ml-[3%] flex flex-row justify-center lg:justify-start mobile-hero-button w-[100%]">
                            <a id="hero-button" href="#contact" className="block w-[264px] font-semibold cursor-pointer text-center rounded-[50px] text-[16px] text-white outline-hidden transition-all linear duration-200 bg-button-color whitespace-nowrap px-[22px] py-[10px] text-shadow hover:bg-button-color-hover">Request a Quote</a>

                        </div>
                    </div>
                    <div id="hero-svg" className="h-full flex flex-col lg:flex-row justify-center items-center mt-[10%] ml-[10%] lg:mt-[0%] lg:ml-[0%] relative">
                        <div className="scale-[1] xl: scale-[1]">
                            
                            <svg width="500" height="500" id="hero-svg-animate" viewBox="0 0 619 615" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
                                <g id="undraw_agreement_re_d4dv 1">
                                {/* className="animate-[bounce_3000ms_ease-in-out_infinite]" */}
                                    <g id="paper_document">
                                    <path id="Vector" d="M410.222 272.133L175.579 413.045C174.758 413.537 173.78 413.674 172.861 413.426C171.941 413.179 171.155 412.566 170.674 411.723L19.7831 146.454C19.3044 145.611 19.1709 144.606 19.4121 143.661C19.6532 142.716 20.2493 141.908 21.0694 141.415L255.713 0.502701C256.534 0.0108037 257.512 -0.126294 258.431 0.121484C259.351 0.369261 260.137 0.981683 260.618 1.82439L411.509 267.094C411.988 267.937 412.121 268.942 411.88 269.887C411.639 270.831 411.043 271.639 410.222 272.133Z" fill="white"/>
                                    <path id="Vector_2" d="M410.222 272.133L175.579 413.045C174.758 413.537 173.78 413.674 172.861 413.426C171.941 413.179 171.155 412.566 170.674 411.723L19.7831 146.454C19.3044 145.611 19.1709 144.606 19.4121 143.661C19.6532 142.716 20.2493 141.908 21.0694 141.415L255.713 0.502701C256.534 0.0108037 257.512 -0.126294 258.431 0.121484C259.351 0.369261 260.137 0.981683 260.618 1.82439L411.509 267.094C411.988 267.937 412.121 268.942 411.88 269.887C411.639 270.831 411.043 271.639 410.222 272.133ZM21.7931 142.687C21.301 142.983 20.9434 143.468 20.7987 144.035C20.654 144.602 20.7341 145.204 21.0213 145.711L171.912 410.98C172.201 411.486 172.673 411.853 173.224 412.002C173.776 412.15 174.363 412.068 174.855 411.773L409.499 270.861C409.991 270.565 410.349 270.08 410.493 269.513C410.638 268.946 410.558 268.343 410.271 267.837L259.38 2.56795C259.091 2.0623 258.619 1.69483 258.068 1.54616C257.516 1.39749 256.929 1.47976 256.437 1.77493L21.7931 142.687Z" fill="#123456"/>
                                    <path id="Vector_3" d="M172.623 169.104L114.426 204.053C113.605 204.545 112.627 204.682 111.708 204.434C110.788 204.187 110.002 203.574 109.522 202.731L75.5077 142.935C75.029 142.091 74.8955 141.086 75.1367 140.141C75.3778 139.197 75.9739 138.389 76.794 137.895L134.991 102.946C135.812 102.454 136.789 102.317 137.709 102.564C138.628 102.812 139.415 103.425 139.895 104.267L173.909 164.064C174.388 164.908 174.521 165.913 174.28 166.857C174.039 167.802 173.443 168.61 172.623 169.104V169.104ZM77.5177 139.167C77.0256 139.463 76.668 139.948 76.5233 140.515C76.3786 141.082 76.4587 141.685 76.7459 142.191L110.76 201.988C111.048 202.493 111.52 202.861 112.072 203.01C112.623 203.158 113.21 203.076 113.703 202.781L171.899 167.832C172.391 167.535 172.749 167.051 172.894 166.484C173.038 165.917 172.958 165.314 172.671 164.808L138.657 105.011C138.369 104.505 137.897 104.138 137.345 103.989C136.794 103.841 136.207 103.923 135.714 104.218L77.5177 139.167Z" fill="#F2F2F2"/>
                                    <path id="Vector_4" d="M160.068 186.458L101.872 221.407C101.132 221.85 100.253 221.973 99.425 221.75C98.5974 221.527 97.8898 220.976 97.4572 220.218L63.4434 160.421C63.0125 159.661 62.8924 158.757 63.1095 157.907C63.3265 157.057 63.8629 156.33 64.6011 155.885L122.798 120.936C123.537 120.493 124.417 120.37 125.244 120.593C126.072 120.816 126.779 121.367 127.212 122.125L161.226 181.922C161.657 182.682 161.777 183.586 161.56 184.436C161.343 185.287 160.806 186.014 160.068 186.458V186.458Z" fill="#123456"/>
                                    <path id="Vector_5" d="M300.536 141.361L118.517 250.67C117.778 251.113 116.897 251.237 116.07 251.014C115.242 250.791 114.534 250.239 114.102 249.48C113.67 248.721 113.55 247.816 113.767 246.966C113.984 246.115 114.521 245.388 115.26 244.944L297.279 135.635C297.645 135.416 298.049 135.272 298.469 135.213C298.889 135.154 299.316 135.18 299.726 135.291C300.136 135.401 300.52 135.593 300.858 135.857C301.196 136.12 301.479 136.449 301.693 136.825C301.907 137.201 302.047 137.616 302.104 138.048C302.162 138.479 302.136 138.918 302.029 139.339C301.921 139.76 301.734 140.155 301.478 140.502C301.222 140.849 300.901 141.141 300.536 141.361V141.361Z" fill="#CCCCCC"/>
                                    <path id="Vector_6" d="M267.796 187.479L129.734 270.39C129.368 270.61 128.964 270.753 128.544 270.812C128.124 270.871 127.697 270.845 127.287 270.734C126.459 270.511 125.751 269.96 125.32 269.2C124.888 268.441 124.767 267.537 124.984 266.686C125.201 265.835 125.738 265.108 126.477 264.665L264.539 181.753C264.905 181.534 265.31 181.39 265.729 181.331C266.149 181.272 266.576 181.298 266.986 181.409C267.396 181.519 267.781 181.711 268.118 181.975C268.456 182.238 268.74 182.567 268.954 182.943C269.167 183.319 269.307 183.734 269.365 184.166C269.422 184.597 269.396 185.036 269.289 185.457C269.181 185.878 268.994 186.274 268.738 186.62C268.482 186.967 268.162 187.259 267.796 187.479V187.479Z" fill="#CCCCCC"/>
                                    <path id="Vector_7" d="M258.666 69.2127L178.181 117.547C177.442 117.99 176.562 118.114 175.734 117.891C174.906 117.668 174.199 117.116 173.767 116.357C173.335 115.598 173.214 114.693 173.431 113.843C173.648 112.992 174.186 112.265 174.924 111.821L255.409 63.4874C256.148 63.0437 257.028 62.9197 257.856 63.1428C258.266 63.2533 258.651 63.4456 258.988 63.7088C259.326 63.9721 259.61 64.301 259.823 64.6769C260.037 65.0529 260.177 65.4684 260.234 65.8998C260.292 66.3312 260.266 66.77 260.159 67.1912C260.051 67.6123 259.864 68.0076 259.608 68.3545C259.352 68.7013 259.032 68.9929 258.666 69.2127Z" fill="#CCCCCC"/>
                                    <path id="Vector_8" d="M249.797 100.995L189.398 137.267C189.033 137.487 188.628 137.63 188.208 137.689C187.788 137.748 187.361 137.722 186.951 137.611C186.542 137.501 186.157 137.309 185.819 137.045C185.482 136.782 185.198 136.453 184.984 136.077C184.77 135.701 184.631 135.286 184.573 134.855C184.515 134.423 184.541 133.984 184.649 133.563C184.756 133.142 184.943 132.747 185.2 132.4C185.456 132.053 185.776 131.761 186.142 131.542L246.54 95.2702C247.279 94.8265 248.159 94.7025 248.987 94.9256C249.815 95.1487 250.523 95.7005 250.954 96.4597C251.386 97.219 251.507 98.1234 251.29 98.974C251.073 99.8246 250.536 100.552 249.797 100.995Z" fill="#CCCCCC"/>
                                    <path id="Vector_9" d="M322.97 180.801L140.951 290.11C140.212 290.554 139.332 290.678 138.504 290.455C137.676 290.232 136.969 289.68 136.537 288.921C136.105 288.161 135.984 287.257 136.201 286.406C136.419 285.556 136.956 284.829 137.695 284.385L319.714 175.076C320.452 174.632 321.333 174.508 322.16 174.731C322.988 174.954 323.696 175.506 324.128 176.265C324.56 177.024 324.68 177.929 324.463 178.779C324.246 179.63 323.709 180.357 322.97 180.801V180.801Z" fill="#CCCCCC"/>
                                    <path id="Vector_10" d="M290.23 226.919L152.168 309.83C151.803 310.05 151.398 310.194 150.978 310.253C150.559 310.312 150.131 310.285 149.722 310.175C149.312 310.064 148.927 309.872 148.589 309.609C148.252 309.346 147.968 309.017 147.754 308.641C147.54 308.265 147.401 307.849 147.343 307.418C147.286 306.987 147.311 306.548 147.419 306.127C147.526 305.705 147.713 305.31 147.97 304.963C148.226 304.616 148.546 304.325 148.912 304.105L286.974 221.194C287.34 220.974 287.744 220.831 288.164 220.771C288.584 220.712 289.011 220.739 289.421 220.849C289.831 220.96 290.215 221.152 290.553 221.415C290.891 221.678 291.174 222.007 291.388 222.383C291.602 222.759 291.742 223.175 291.799 223.606C291.857 224.038 291.831 224.476 291.724 224.898C291.616 225.319 291.429 225.714 291.173 226.061C290.917 226.408 290.596 226.699 290.23 226.919V226.919Z" fill="#CCCCCC"/>
                                    <path id="Vector_11" d="M345.405 220.241L163.386 329.551C163.02 329.77 162.616 329.914 162.196 329.973C161.776 330.032 161.349 330.006 160.939 329.895C160.529 329.785 160.144 329.592 159.807 329.329C159.469 329.066 159.185 328.737 158.971 328.361C158.758 327.985 158.618 327.57 158.56 327.138C158.503 326.707 158.529 326.268 158.636 325.847C158.744 325.426 158.931 325.03 159.187 324.683C159.443 324.337 159.763 324.045 160.129 323.825L342.148 214.516C342.514 214.297 342.918 214.153 343.338 214.094C343.758 214.035 344.185 214.061 344.595 214.172C345.005 214.282 345.39 214.474 345.727 214.738C346.065 215.001 346.349 215.33 346.563 215.706C346.776 216.082 346.916 216.497 346.974 216.929C347.031 217.36 347.005 217.799 346.898 218.22C346.79 218.641 346.603 219.036 346.347 219.383C346.091 219.73 345.771 220.022 345.405 220.241V220.241Z" fill="#CCCCCC"/>
                                    <path id="Vector_12" d="M356.622 239.962L174.603 349.271C174.237 349.49 173.833 349.634 173.413 349.693C172.993 349.752 172.566 349.726 172.156 349.615C171.746 349.505 171.362 349.313 171.024 349.049C170.686 348.786 170.403 348.457 170.189 348.081C169.975 347.705 169.835 347.29 169.778 346.858C169.72 346.427 169.746 345.988 169.853 345.567C169.961 345.146 170.148 344.751 170.404 344.404C170.661 344.057 170.981 343.765 171.347 343.546L353.365 234.237C353.731 234.017 354.136 233.873 354.556 233.814C354.975 233.755 355.403 233.781 355.812 233.892C356.222 234.002 356.607 234.195 356.945 234.458C357.282 234.721 357.566 235.05 357.78 235.426C357.994 235.802 358.133 236.217 358.191 236.649C358.248 237.08 358.223 237.519 358.115 237.94C358.008 238.361 357.821 238.757 357.564 239.104C357.308 239.45 356.988 239.742 356.622 239.962V239.962Z" fill="#CCCCCC"/>
                                    <path id="Vector_13" d="M297.761 316.73C300.29 313.67 302.566 310.399 304.566 306.951C306.36 303.84 308.119 300.514 308.515 296.865C308.717 295.312 308.56 293.731 308.055 292.252C307.551 290.772 306.714 289.436 305.612 288.352C304.547 287.343 303.197 286.709 301.758 286.541C300.32 286.373 298.866 286.68 297.608 287.417C296.335 288.168 295.283 289.258 294.564 290.573C293.845 291.888 293.485 293.378 293.523 294.886C293.626 296.546 294.093 298.16 294.888 299.609C295.684 301.058 296.787 302.303 298.116 303.253C303.497 307.258 311.899 307.049 317.633 304.001C324.092 300.568 327.429 291.586 322.355 285.438C321.299 284.159 319.543 285.588 319.807 286.967C320.143 288.831 321.158 290.492 322.645 291.612C324.133 292.733 325.98 293.227 327.81 292.995C329.641 292.762 331.316 291.82 332.493 290.362C333.67 288.903 334.261 287.038 334.145 285.147L331.864 286.517C334.66 287.79 337.734 288.283 340.775 287.948C343.816 287.613 346.718 286.46 349.188 284.607C350.41 283.695 351.501 282.611 352.43 281.388C353.547 279.891 355.423 278.924 356.941 277.846L367.886 270.075C369.496 268.932 367.965 266.208 366.342 267.361L356.43 274.398C354.778 275.571 353.115 276.729 351.474 277.917C350.3 278.766 349.578 280.136 348.51 281.145C346.488 283.013 343.991 284.253 341.31 284.719C338.628 285.185 335.873 284.858 333.365 283.777C333.132 283.648 332.87 283.583 332.605 283.587C332.339 283.592 332.08 283.667 331.851 283.805C331.622 283.942 331.431 284.138 331.297 284.373C331.163 284.608 331.09 284.874 331.084 285.147C331.205 286.275 330.887 287.407 330.2 288.296C329.512 289.184 328.511 289.758 327.413 289.891C326.316 290.025 325.212 289.708 324.341 289.009C323.471 288.31 322.904 287.285 322.765 286.159L320.218 287.689C323.491 291.655 321.311 297.739 317.54 300.4C313.323 303.376 307.091 303.893 302.337 302.043C301.171 301.63 300.1 300.975 299.191 300.119C298.282 299.262 297.555 298.222 297.055 297.064C296.592 296.017 296.46 294.848 296.677 293.72C296.895 292.592 297.452 291.563 298.269 290.778C298.976 290.059 299.928 289.651 300.923 289.64C301.919 289.629 302.879 290.016 303.601 290.719C304.389 291.545 304.966 292.557 305.283 293.666C305.6 294.775 305.647 295.947 305.419 297.079C304.929 300.229 303.234 303.133 301.658 305.824C299.858 308.889 297.822 311.802 295.57 314.535C294.308 316.069 296.485 318.281 297.761 316.73L297.761 316.73Z" fill="#123456"/>
                                    </g>
                                    <g id="people">
                                    <path id="Vector_14" d="M324.927 391.485C325.191 391.764 325.433 392.064 325.651 392.381L359.545 391.529L363.5 384.105L375.184 388.772L369.427 402.614C368.962 403.732 368.157 404.666 367.131 405.273C366.106 405.881 364.917 406.131 363.742 405.985L325.448 401.232C324.544 402.407 323.314 403.271 321.921 403.711C320.528 404.15 319.037 404.143 317.648 403.69C316.259 403.238 315.037 402.362 314.144 401.178C313.251 399.995 312.73 398.56 312.65 397.065C312.571 395.57 312.936 394.085 313.697 392.808C314.459 391.532 315.58 390.523 316.913 389.918C318.246 389.312 319.727 389.138 321.158 389.418C322.59 389.698 323.905 390.419 324.927 391.485V391.485Z" fill="#FFB7B7"/>
                                    <path id="Vector_15" d="M435.418 602.99H424.274L418.972 558.82L435.42 558.821L435.418 602.99Z" fill="#FFB7B7"/>
                                    <path id="Vector_16" d="M438.26 614.09L402.325 614.089V613.622C402.325 609.81 403.799 606.155 406.422 603.46C409.045 600.765 412.603 599.251 416.312 599.25H416.313L438.261 599.251L438.26 614.09Z" fill="#2F2E41"/>
                                    <path id="Vector_17" d="M334.22 602.736L323.972 598.237L335.983 555.478L351.108 562.118L334.22 602.736Z" fill="#FFB7B7"/>
                                    <path id="Vector_18" d="M332.59 614.09L299.544 599.584L299.723 599.155C301.18 595.65 303.933 592.883 307.376 591.464C310.818 590.044 314.669 590.087 318.08 591.584L318.081 591.585L338.264 600.444L332.59 614.09Z" fill="#2F2E41"/>
                                    <path id="Vector_19" d="M381.248 401.054L380.441 414.472L403.999 417.062L428.648 419.773L421.392 399.397L381.248 401.054Z" fill="#FFB7B7"/>
                                    <path id="Vector_20" d="M379.7 414.645L370.548 349.092L386.41 343.751L391.069 337.186L413.74 338.564L417.069 346.225L429.158 352.094L427.3 387.546L428.655 417.202L379.7 414.645Z" fill="#2F2E41"/>
                                    <path id="Vector_21" d="M373.94 397.078L357.805 390.445L357.874 390.15C357.943 389.853 364.81 360.367 365.722 355.629C366.672 350.693 370.142 349.328 370.29 349.273L370.397 349.232L376.782 351.229L379.587 373.868L373.94 397.078Z" fill="#2F2E41"/>
                                    <path id="Vector_22" d="M342.521 594.973L321.044 590.446L355.37 493.121L367.119 459.925C367.119 459.925 374.57 433.308 377.937 423.008L379.968 409.188L428.063 414.658C428.063 414.658 441.495 434.927 437.415 467.965L439.26 592.143L417.783 593.275L399.793 468.035L368.22 536.691C368.22 536.691 358.269 565.989 351.148 572.339L342.521 594.973Z" fill="#2F2E41"/>
                                    <path id="Vector_23" d="M408.776 419.267C409.154 419.258 409.532 419.279 409.907 419.331L432.344 393.213L429.734 385.186L441.009 379.556L446.974 393.305C447.456 394.415 447.574 395.657 447.311 396.842C447.047 398.028 446.417 399.094 445.514 399.88L416.085 425.502C416.31 426.981 416.09 428.496 415.456 429.844C414.823 431.192 413.804 432.311 412.537 433.05C411.27 433.789 409.813 434.114 408.362 433.982C406.91 433.85 405.532 433.267 404.411 432.311C403.289 431.354 402.478 430.07 402.084 428.628C401.691 427.186 401.734 425.655 402.208 424.239C402.682 422.823 403.564 421.589 404.737 420.701C405.911 419.813 407.319 419.312 408.776 419.267V419.267Z" fill="#FFB7B7"/>
                                    <path id="Vector_24" d="M430.553 395.755L421.194 373.134L424.844 357.377L428.777 352.271C429.065 352.145 429.376 352.081 429.689 352.084C430.003 352.087 430.312 352.156 430.598 352.289C432.048 352.888 433.283 354.727 434.269 357.753L443.041 383.425L430.553 395.755Z" fill="#2F2E41"/>
                                    <path id="Vector_25" d="M381.994 328.804V311.749C381.994 305.688 384.337 299.876 388.508 295.59C392.679 291.304 398.336 288.897 404.235 288.897C410.134 288.897 415.791 291.304 419.962 295.59C424.133 299.876 426.476 305.688 426.476 311.749V328.804C426.475 329.618 426.16 330.398 425.6 330.973C425.04 331.549 424.281 331.872 423.489 331.873H384.981C384.189 331.872 383.43 331.549 382.87 330.973C382.31 330.398 381.995 329.618 381.994 328.804V328.804Z" fill="#2F2E41"/>
                                    <path id="Vector_26" d="M399.665 331.476C408.67 331.476 415.971 323.975 415.971 314.722C415.971 305.468 408.67 297.967 399.665 297.967C390.659 297.967 383.358 305.468 383.358 314.722C383.358 323.975 390.659 331.476 399.665 331.476Z" fill="#FFB7B7"/>
                                    <path id="Vector_27" d="M376.732 313.114C376.737 308.321 378.593 303.726 381.891 300.337C385.189 296.948 389.661 295.042 394.326 295.036H397.646C402.31 295.042 406.782 296.948 410.08 300.337C413.379 303.726 415.234 308.321 415.239 313.114V313.455H408.224L405.831 306.57L405.353 313.455H401.727L400.52 309.981L400.278 313.455H376.732L376.732 313.114Z" fill="#2F2E41"/>
                                    <path id="Vector_28" d="M398.06 333.791C397.731 333.333 397.534 332.788 397.493 332.22C397.451 331.652 397.567 331.084 397.826 330.58C401.344 323.705 406.269 311.002 399.732 303.167L399.262 302.605H418.241V331.883L401 335.009C400.825 335.041 400.648 335.057 400.471 335.057C400 335.057 399.536 334.942 399.117 334.722C398.698 334.502 398.336 334.183 398.06 333.791V333.791Z" fill="#2F2E41"/>
                                    <path id="Vector_29" d="M176.659 593.342L186.731 597.04L205.408 558.883L190.542 553.425L176.659 593.342Z" fill="#9F616A"/>
                                    <path id="Vector_30" d="M170.6 602.43L175.265 589.02L195.1 596.303C198.45 597.538 201.187 600.088 202.71 603.393C204.233 606.698 204.417 610.489 203.224 613.934L203.077 614.356L170.6 602.43Z" fill="#2F2E41"/>
                                    <path id="Vector_31" d="M242.153 603.578L252.849 603.577L257.938 561.188L242.152 561.189L242.153 603.578Z" fill="#9F616A"/>
                                    <path id="Vector_32" d="M239.425 599.99L260.489 599.989H260.49C262.253 599.989 263.998 600.346 265.627 601.039C267.255 601.732 268.735 602.748 269.982 604.029C271.228 605.309 272.217 606.83 272.892 608.503C273.566 610.177 273.914 611.97 273.914 613.781V614.23L239.426 614.231L239.425 599.99Z" fill="#2F2E41"/>
                                    <path id="Vector_33" d="M217.778 332.761L222.429 323.317C222.429 323.317 239.758 327.777 241.333 338.097L217.778 332.761Z" fill="#F1F1F1"/>
                                    <path id="Vector_34" d="M198.584 440.748L211.234 513.28L177.646 574.314L197.712 582.382L231.737 523.218L236.099 507.082L238.716 591.346L256.813 590.782L265.11 512.1L251.802 438.955L198.584 440.748Z" fill="#2F2E41"/>
                                    <path id="Vector_35" d="M222.597 457.894C204.014 457.894 192.214 454.242 191.95 454.184L191.522 454.091L201.202 407.978L201.638 365.444C201.638 347.419 213.183 334.13 214.785 332.904C215.055 331.81 215.554 330.79 216.247 329.914C216.941 329.039 217.812 328.329 218.799 327.835C222.65 326.04 227.357 328.194 227.555 328.287L241.68 333.729L241.746 333.93C241.917 334.446 260.521 397.203 260.521 397.203C260.521 397.203 259.395 452.036 259.003 453.833C259.003 453.833 232.923 457.894 222.597 457.894Z" fill="#3F3D56"/>
                                    <path id="Vector_36" d="M236.877 320.343C247.421 320.343 255.968 311.56 255.968 300.727C255.968 289.893 247.421 281.11 236.877 281.11C226.333 281.11 217.786 289.893 217.786 300.727C217.786 311.56 226.333 320.343 236.877 320.343Z" fill="#9F616A"/>
                                    <path id="Vector_37" opacity="0.2" d="M215.59 368.922L248.991 416.805L253.923 394.444L215.59 368.922Z" fill="black"/>
                                    <path id="Vector_38" d="M320.306 401.502C319.367 402.266 318.276 402.808 317.111 403.092C315.945 403.375 314.733 403.393 313.56 403.143C312.388 402.893 311.282 402.382 310.323 401.646C309.363 400.91 308.572 399.966 308.005 398.882L279.257 403.61L285.485 389.443L311.83 387.125C313.666 386.268 315.744 386.132 317.671 386.744C319.597 387.356 321.239 388.673 322.283 390.445C323.328 392.218 323.704 394.322 323.34 396.36C322.975 398.398 321.896 400.227 320.306 401.502H320.306Z" fill="#9F616A"/>
                                    <path id="Vector_39" d="M286.965 388.637L297.295 387.596L300.158 402.401L287.16 402.638L286.965 388.637Z" fill="#F1F1F1"/>
                                    <path id="Vector_40" d="M295.433 407.56L244.843 402.932L219.298 361.189L219.219 360.82C218.494 357.41 219.002 353.846 220.648 350.792C222.293 347.739 224.964 345.405 228.161 344.227C231.359 343.048 234.864 343.106 238.024 344.389C241.183 345.672 243.78 348.092 245.329 351.198L260.325 381.252L290.588 385.953L295.433 407.56Z" fill="#3F3D56"/>
                                    <path id="Vector_41" d="M220.615 317.758L236.461 318.343C237.427 318.378 240.049 307.667 240.392 305.446C240.663 303.999 241.437 302.703 242.57 301.801C243.703 300.898 245.117 300.45 246.548 300.54C247.734 300.655 250.726 298.378 253.812 295.682C259.672 290.563 259.367 280.949 252.93 276.624C252.754 276.506 252.581 276.398 252.412 276.3C248.351 273.965 243.601 273.18 238.948 273.121C234.729 273.066 230.392 273.612 226.675 275.663C220.013 279.341 216.467 287.378 216.156 295.143C215.844 302.907 218.267 310.499 221.016 317.739" fill="#2F2E41"/>
                                    </g>
                                </g>
                            </svg>

                        </div>

                    </div>
              </div>

                {/* <div id="process" className="tilt">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                    </svg>
                </div>
    */}
          </div>
      </div>
      
  )
};

export default HeroSection;
