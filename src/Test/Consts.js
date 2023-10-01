const Const = {
    answers : [
        "전혀 아니다", "아닌편이다", "중립", "그런편이다", "완전 그렇다" 
    ],
    questions : [
        {
            n : 1,
            q : "생각을 위한 나만의 공간이 필요한가?", 
            t : 5,
        },
        {
            n : 2,
            q : "매사에 수용적적인가?", 
            t : 9,
        },
        {
            n : 3,
            q : "언제나 개선하려고 하는가?", 
            t : 1,
        },
        {
            n : 4,
            q : "리더십이 있다고 생각하는가?", 
            t : 8,
        },
        {
            n : 5,
            q : "감성적이라 혼자 있을 때가 많은가?", 
            t : 4,
        },
        {
            n : 6,
            q : "재미있는 일을 찾아 즐기는가?", 
            t : 7,
        },
        {
            n : 7,
            q : "다른 이들과 함께 일하기를 좋아하나?", 
            t : 2,
        },
        {
            n : 8,
            q : "문제가 해결될 때까지 그것만 생각하는가?", 
            t : 5,
        },
        {
            n : 9,
            q : "내 뜻대로 결정하려고 하는가?", 
            t : 8,
        },
        {
            n : 10,
            q : "해야할 일을 미루는 편인가?",
            t : 9,
        },
        {
            n : 11,
            q : "공적인것보다 개인생활에 관심이 더 많은가?",
            t : 5,
        },
        {
            n : 12,
            q : "모든 일들이 순조롭게 진행되기를 원하는가?", 
            t : 9,
        },
        {
            n : 13,
            q : "나만의 고상한 취미가 있는가?", 
            t : 4,
        },
        {
            n : 14,
            q : "다른 사람을 보살피는 것에 관심이 있는가?", 
            t : 2,
        },
        {
            n : 15,
            q : "모험심이 많은가?", 
            t : 7,
        },
        {
            n : 16,
            q : "능력을 인정받기 위해 노력하는가?", 
            t : 3,
        },
        {
            n : 17,
            q : "낭만적이고 예술가 기질이 있는가?", 
            t : 4,
        },
        {
            n : 18,
            q : "끊임 없이 변화하는 생활을 좋아하는가?",
            t : 7,
        },
        {
            n : 19,
            q : "다른 사람들을 지나치게 칭찬하는가?", 
            t : 2,
        },
        {
            n : 20,
            q : "속상한 일이 생기면 피하려하는가?", 
            t : 9,
        },
        {
            n : 21,
            q : "옳지 않은 일을 보면 화가 나는가?", 
            t : 1,
        },
        {
            n : 22,
            q : "명확한 지침이 있는 일을 선호하는가?", 
            t : 6,
        },
        {
            n : 23,
            q : "타인의 생각에 공감을 잘하는가?", 
            t : 2,
        },
        {
            n : 24,
            q : "늘 강해야한다고 생각하는가?", 
            t : 8,
        },
        {
            n : 25,
            q : "도덕적으로 자제력이 강한 사람인가?", 
            t : 1,
        },
        {
            n : 26,
            q : "가끔 사랑하는 사람조차 의심하는가?", 
            t : 6,
        },
        {
            n : 27,
            q : "타인과 좋은 관계를 유지하려 하는가?", 
            t : 9,
        },
        {
            n : 28,
            q : "자극과 흥분을 유발하는 활동을 좋아하는가?", 
            t : 7,
        },
        {
            n : 29,
            q : "분석적인 사고를 하는가?", 
            t : 5,
        },
        {
            n : 30,
            q : "과정보다 결과가 중요하다고 생각하나?", 
            t : 3,
        },
        {
            n : 31,
            q : "어린아이처럼 유쾌한가?", 
            t : 7,
        },
        {
            n : 32,
            q : "인간보다 일이 우선시 되는가?", 
            t : 3,
        },
        {
            n : 33,
            q : "원칙에 기초를 두고 행동하는가?", 
            t : 1,
        },
        {
            n : 34,
            q : "사소한 일에도 걱정이 많은가?", 
            t : 6,
        },
        {
            n : 35,
            q : "완벽을 위해 끝까지 노력하는가?", 
            t : 1,
        },
        {
            n : 36,
            q : "타인을 지배하려하는 경향이 있는가?", 
            t : 8,
        },
        {
            n : 37,
            q : "나 자신이 이방인처럼 느껴질 때가 있는가?", 
            t : 4,
        },
        {
            n : 38,
            q : "시간이나 돈을 아끼는 편인가?", 
            t : 5,
        },
        {
            n : 39,
            q : "적응력이 뛰어나 상황에 잘 대처하는가?", 
            t : 3,
        },
        {
            n : 40,
            q : "소속집단에 협력하여 책임감을 발휘하는가?", 
            t : 6,
        },
        {
            n : 41,
            q : "나만의 독특한 감정을 가지고 있는가?", 
            t : 4,
        },
        {
            n : 42,
            q : "일을 과감하게 추진하는 편인가?", 
            t : 8,
        },
        {
            n : 43,
            q : "가끔 분위기에 따라 기분이 변하는가?", 
            t : 4,
        },
        {
            n : 44,
            q : "공격적으로 내 주장을 말하는가?", 
            t : 8,
        },
        {
            n : 45,
            q : "경쟁심이 강한 편인가?", 
            t : 3,
        },
        {
            n : 46,
            q : "나를 둘러싼 세계를 이해하는 것에 관심이 있는가?", 
            t : 5,
        },
        {
            n : 47,
            q : "다른 사람들을 통제하려 드는가?", 
            t : 8,
        },
        {
            n : 48,
            q : "다른 사람들을 도와줄 때 기분이 좋은가?", 
            t : 2,
        },
        {
            n : 49,
            q : "안전을 중요하게 생각하는가?", 
            t : 6,
        },
        {
            n : 50,
            q : "성취지향적인가?", 
            t : 3,
        },
        {
            n : 51,
            q : "다른 사람들의 의견에 생각없이 동조하는 편인가?", 
            t : 9,
        },
        {
            n : 52,
            q : "사람들을 잘 배려하는가?", 
            t : 2,
        },
        {
            n : 53,
            q : "다른 사람들에게 동기를 부여해서 이끌어 가는가?", 
            t : 8,
        },
        {
            n : 54,
            q : "때때로 엄격하여 융통성 없는가?", 
            t : 1,
        },
        {
            n : 55,
            q : "세상의 일들과 조화롭게 흘러가길 바라는가?", 
            t : 9,
        },
        {
            n : 56,
            q : "스스로 고립된 생각에 빠지기도 하는가?", 
            t : 5,
        },
        {
            n : 57,
            q : "낙천적으로 세상을 살아가는가?", 
            t : 7,
        },
        {
            n : 58,
            q : "강한 자신감으로 사람들을 설득하는가?", 
            t : 8,
        },
        {
            n : 59,
            q : "겁이 많은 편인가?", 
            t : 6,
        },
        {
            n : 60,
            q : "일을 공평하게 처리하는가?", 
            t : 1,
        },
        {
            n : 61,
            q : "타인이 하는 일에 상관하지 않는 편인가?", 
            t : 9,
        },
        {
            n : 62,
            q : "사람들과 친해지려 노력하는가?", 
            t : 2,
        },
        {
            n : 63,
            q : "항상 새로운 경험을 추구하는가?", 
            t : 7,
        },
        {
            n : 64,
            q : "특별한 것을 보면 부러운가?", 
            t : 4,
        },
        {
            n : 65,
            q : "옳고 그름이 분명하여 때로는 비판적인가?", 
            t : 1,
        },
        {
            n : 66,
            q : "성공해야만 사랑받을 수 있다고 믿는가?", 
            t : 3,
        },
        {
            n : 67,
            q : "같은 일을 계속하면 지루한가?", 
            t : 7,
        },
        {
            n : 68,
            q : "이성적으로 냉철하게 생각하는 편인가?", 
            t : 5,
        },
        {
            n : 69,
            q : "잘못될까봐 결정을 망설이는가?", 
            t : 6,
        },
        {
            n : 70,
            q : "조화로움을 추구하는 평화주의가인가?", 
            t : 9,
        },
        {
            n : 71,
            q : "맡은 일을 효율적으로 처리하는가?", 
            t : 3,
        },
        {
            n : 72,
            q : "다른 사람이 속상할까봐 내 감정을 표현하지 않는가?", 
            t : 2,
        },
        {
            n : 73,
            q : "양심에 따라 행동하는가?", 
            t : 1,
        },
        {
            n : 74,
            q : "어떤 일을 잘 하다가도 혼자 우울해지기도 하는가?", 
            t : 4,
        },
        {
            n : 75,
            q : "모든 것을 머리로 이해하고 판단하는가?", 
            t : 5,
        },
        {
            n : 76,
            q : "충성할 만한 사람에게는 헌신할 수 있는가?", 
            t : 6,
        },
        {
            n : 77,
            q : "다른 사람의 호감을 얻기 위해 노력하는가?", 
            t : 2,
        },
        {
            n : 78,
            q : "뒤떨어지지 않기 위해 무엇인가 끊임없이 행하는가?", 
            t : 3,
        },
        {
            n : 79,
            q : "참을성이 없는 편인가?", 
            t : 7,
        },
        {
            n : 80,
            q : "평범한 삶의 방식을 싫어하는가?", 
            t : 4,
        },
        {
            n : 81,
            q : "친하게 지내는 사람과는 영원한 우정을 유지하려 노력하는가?", 
            t : 6,
        },
    ]
};

export default Const;
