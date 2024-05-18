function ganji(a) {
    var year = a.value;
    if(year == 0 || year == "" || year == "-"){
        document.getElementById('year_n').innerText = "결과가 여기 나옵니다.";
        document.getElementById('year_t').innerText = "";
        document.getElementById('year_h').innerText = "";
        document.getElementById('year_y').innerText = "";
        document.getElementById('year_a').innerText = "";
        document.getElementById('year_i').innerText = "";
        document.getElementById('picture').style.backgroundImage = "";
        document.getElementById('right').style.backgroundColor = "";
        document.getElementById('right').style.color = "";
        document.getElementById('year').style.backgroundColor = "";
        document.getElementById('year').style.color = "";
        document.getElementById('info').style.color = "";
        document.getElementById('info2').style.color = "";
        document.querySelector("link[rel*='icon']").href = "ico_white.svg";
        document.querySelector("meta[name*='theme-color']").content = "";
    } else {
        if(year > 0){
            var cheongan = ["경", "신", "임", "계", "갑", "을", "병", "정", "무", "기"];
            var hanjagan = ["庚", "辛", "壬", "癸", "甲","乙", "丙", "丁", "戊", "己"];
            var jiji = ["신", "유", "술", "해", "자", "축", "인", "묘", "진", "사", "오", "미"];
            var hanji = ["申", "酉", "戌", "亥", "子", "丑", "寅", "卯", "辰", "巳", "午", "未"];
            var sibiji = ["원숭이", "닭", "개", "돼지", "쥐", "소", "호랑이", "토끼", "용", "뱀", "말", "양"];
            var color = ["하얀", "하얀", "검은", "검은", "푸른", "푸른", "붉은", "붉은", "황금", "황금"];
            var coloreng = ["white", "white", "black", "black", "blue", "blue", "red", "red", "yellow", "yellow"];
            var colorhex = ["#ffffff", "#ffffff", "#111133", "#111133", "#1155bb", "#1155bb", "#bb1133", "#bb1133", "#ffdd33", "#ffdd33"];
            var textcolorhex = ["#000000", "#000000", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#000000", "#000000"];
            var textcoloreng= ["black", "black", "white", "white", "white", "white", "white", "white", "black", "black"];
            var ganji1 = year%10;
            var ganji2 = year%12;
        } else if(year < 0) {
            var cheongan = ["경", "기", "무", "정", "병", "을", "갑", "계", "임", "신"];
            var hanjagan = ["庚", "己", "戊", "丁", "丙", "乙", "甲", "癸", "壬", "辛"];
            var jiji = ["신", "미", "오", "사", "진", "묘", "인", "축", "자", "해", "술", "유"];
            var hanji = ["申", "未", "午", "巳", "辰", "卯", "寅", "丑", "子", "亥", "戌", "酉"];
            var sibiji = ["원숭이", "양", "말", "뱀", "용", "토끼", "호랑이", "소", "쥐", "돼지", "개", "닭"];
            var color = ["하얀", "황금", "황금", "붉은", "붉은", "푸른", "푸른", "검은", "검은", "하얀"];
            var coloreng = ["white", "yellow", "yellow", "red", "red", "blue", "blue", "black", "black", "white"];
            var colorhex = ["#ffffff", "#ffdd33", "#ffdd33", "#bb1133", "#bb1133", "#1155bb", "#1155bb", "#111133", "#111133", "#ffffff"];
            var textcolorhex = ["#000000", "#000000", "#000000", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#000000"];
            var textcoloreng= ["black", "black", "black", "white", "white", "white", "white", "white", "white", "black"];
            var ganji1 = Math.abs(year)%10 - 1;
            var ganji2 = Math.abs(year)%12 - 1;
      
            if (ganji1 < 0){
              ganji1 = ganji1 + 10;
            }
            if (ganji2 < 0){
              ganji2 = ganji2 + 12;
            }
        }
        document.getElementById('year_n').innerText = a.value + "년은";
        document.getElementById('year_t').innerText = cheongan[ganji1] + jiji[ganji2];
        document.getElementById('year_h').innerText = "(" + hanjagan[ganji1] + hanji[ganji2] + ")";
        document.getElementById('year_y').innerText = "년";
        document.getElementById('year_i').innerText = " 이며,";
        document.getElementById('year_a').innerText = color[ganji1] + " " + sibiji[ganji2] + "의 해입니다.";

        document.getElementById('right').style.backgroundColor = colorhex[ganji1];
        document.getElementById('right').style.color = textcolorhex[ganji1];

        if (textcoloreng[ganji1] == "white") {
            document.getElementById('picture').style.backgroundImage = "url(./animal/" + sibiji[ganji2] + ".svg)";
            document.getElementById('picture').style.filter = "var(--white)";
        } else {
            document.getElementById('picture').style.backgroundImage = "url(./animal/" + sibiji[ganji2] + ".svg)";
            document.getElementById('picture').style.filter = "none";
        }

        document.getElementById('year').style.backgroundColor = colorhex[ganji1];
        document.getElementById('year').style.color = textcolorhex[ganji1];
        document.getElementById('info').style.color = textcolorhex[ganji1];
        document.getElementById('info2').style.color = textcolorhex[ganji1];

        document.querySelector("link[rel*='icon']").href = "ico_" + coloreng[ganji1] + ".svg";
        document.querySelector("meta[name*='theme-color']").content = colorhex[ganji1];
    }
}