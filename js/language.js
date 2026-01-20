const selector = document.querySelector("#languageSelector");

const langResource = {
    ko : {
            title_name: "올리버와 레나의 결혼식 초대장",
            line1: "여러분을 초대합니다!",
            line2: "Lena & Oliver",
            line3: `2028년 8월 13일 수요일 (태평양 표준시) </br> 12405 E Waterfront Dr, </br> Los Angeles, CA 90045`,
            days: "일",
            hours: "시간",
            mins: "분",
            secs:"초",
            nav_home: "홈",
            nav_schedule: "일정",
            nav_location: "위치",
            nav_photos: "사진",
            nav_rsvp: "참석 여부",
            line4: `저희 결혼합니다! </br> 사랑과 웃음이 넘치는 그날, 함께 해주세요. </br></br>`,
            title_schedule: "일정 (태평양 표준시)",
            schedule_date: `<div class="waktu tanggal-hari has-text-centered">2028년 8월</div> 
                            <div class="waktu tanggal-angka has-text-centered">13</div>
                            <div class="waktu tanggal-bulan has-text-centered">수요일</div>`,
            schedule_time: `시간:
                            <br>
                            <strong>오후 4:00</strong>`,
            schedule_reception: `피로연:
                                <br>
                                <strong>오후 5:00</strong>`,
            title_location: "위치",
            exact_location: `12405 E Waterfront Dr,
                            </br>
                            Los Angeles, CA 90045
                            </br>`,
            btn_dir: "길찾기",
            title_photos: "사진",
            title_rsvp: "참석 여부",
            rsvp_line: `저희의 소중한 날에 함께해주시어 자리를 빛내주신다면, 더없이 큰 기쁨이 될 것입니다.
                        </br>
                        참석이 가능하시다면, 하단의 버튼을 통해 참석 여부를 알려주세요.
                        </br></br>
                        혹시 함께하지 못하시더라도 괜찮습니다!
                        </br>
                        아래에 축하 메시지나 따뜻한 한마디를 남겨주셔도 좋습니다.
                        </br></br>
                        더 좋은 날에 꼭 다시 만날 수 있길 바랍니다.
                        </br>
                        그때까지 항상 평안하시길 바랍니다.💛`,
            duedate: `✨ 참석 여부 회신은 <strong>7월 1일(화)</strong>까지 부탁드립니다 ✨`,
            btn_rsvp: "참석 여부/축하 메시지",
            title_contribution: "마음 전할 곳",
            contribution_line: `저희 결혼식에 함께해 주시는 것만으로도 더없이 큰 축복입니다.
                                </br>
                                멀리서 마음을 전해주시고자 한다면,  저희의 앞날을 위한 작은 응원을 감사히 받겠습니다.
                                </br></br>
                                결혼식이 미국에서 진행되는 관계로 직접 인사를 드리지 못하고 이렇게 계좌 정보를 안내드리는 점 너그럽게 양해 부탁드립니다.
                                </br></br>`,
            account_label: "예금주 : 레나",
            accountNumber: "카카오뱅크 1234-56-7890000",
            copy1: "복사하기"
        },
    en : {
            title_name: "The Wedding of Oliver & Lena",
            line1: "Save the Date!",
            line2: "Lena & Oliver",
            line3: `Wednesday, 13 August 2028 (PST) </br> 12405 E Waterfront Dr, </br> Los Angeles, CA 90045`,
            days: "Days",
            hours: "Hours",
            mins: "Minuets",
            secs:"Seconds",
            nav_home: "Home",
            nav_schedule: "Schedule",
            nav_location: "Location",
            nav_photos: "Photos",
            nav_rsvp: "RSVP",
            line4: `We're getting married! </br> Come celebrate love, laughter, and a lifetime of adventures with us. </br></br>`,
            title_schedule: "SCHEDULE",
            schedule_date: `<div class="waktu tanggal-hari has-text-centered">Wednesday</div> 
                            <div class="waktu tanggal-angka has-text-centered">13</div>
                            <div class="waktu tanggal-bulan has-text-centered">August 2028</div>`,
            schedule_time: `Time:
                            <br>
                            <strong>4:00PM PST</strong>`,
            schedule_reception: `Reception:
                                <br>
                                <strong>5:00PM PST</strong>`,
            title_location: "LOCATION",
            exact_location: `12405 E Waterfront Dr,
                            </br>
                            Los Angeles, CA 90045
                            </br>`,
            btn_dir: "Directions",
            title_photos: "PHOTOS",
            title_rsvp: "RSVP",
            rsvp_line: `If you are able to join us and bless us with your presence, it would be our greatest honor and joy.
                        </br>
                        We look forward to hearing from you if you're able to attend.
                        </br></br>
                        If you cannot make it to our wedding, that's perfectly okay!
                        </br>
                        You're also welcome to leave us a message or blessing below. We'd love to hear from you!
                        </br></br>
                        we hope to see you again on another happy occasion.
                        </br>
                        Until then, please stay safe and healthy.💛`,
            duedate: `✨ Kindly RSVP by <strong>Tuesday, July 1st</strong> ✨`,
            btn_rsvp: "RSVP",
            title_contribution: "CONTRIBUTION DETAILS",
            contribution_line: `Your presence at our wedding is the greatest gift we could ask for.
                                </br>
                                If you wish to contribute further, a donation toward our future together would be deeply appreciated.
                                </br></br>`,
            account_label: "Venmo",
            accountNumber: "@ThisIsNotRealId",
            copy1: "Copy"
        }
}

const browserLang = navigator.language || navigator.userLanguage;
const langCode = browserLang.substr(0, 2);
let initialLang = (langCode === 'ko' ? 'ko' : 'en');

function chooseLanguage() {
    selector.value = initialLang;
    updateLanguage(initialLang);

    selector.addEventListener("change", changeLanguage)
}

function changeLanguage() {
    const selectedLang = selector.value;
    updateLanguage(selectedLang);
}

function updateLanguage(lang) {
    for (let key in langResource[lang]) {
        const element = document.getElementById(key);
        if (element) {
            element.innerHTML = langResource[lang][key];
        }
    }
}

window.addEventListener("load", chooseLanguage);
window.addEventListener("load", changeLanguage);