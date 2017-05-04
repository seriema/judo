const data = [
    {
        romaji: "de ashi harai",
        swedish: "gå framåt, ben, svep",
        technique: "Nage waza",
        beltjudo: "Yellow",
        beltjujutsu: "Brown",
        rank: "5 kyu",
        order: 1,
        youtube: "https://www.youtube.com/watch?v=VFgPK3l5d9U&list=PLkgloM3XaRGhCDMRLsBbRiVaILQ2u44_g&index=1"
    },
    {
        romaji: "hon kesa gatame",
        swedish: "ursprung, buddhistiskt klädesplagg, fasthållning",
        technique: "Ne waza",
        beltjudo: "Yellow",
        beltjujutsu: "Yellow",
        rank: "5 kyu",
        order: 1,
        youtube: "https://www.youtube.com/watch?v=Hqt_qagQWQw&index=1&list=PLkgloM3XaRGiRHparlJ2DFtpx8S4Cnlke"
    },
    {
        romaji: "ko uchi gari",
        swedish: "liten, insida, svepande rörelse",
        technique: "Nage waza",
        beltjudo: "Yellow",
        beltjujutsu: "Brown",
        rank: "5 kyu",
        order: 2,
        youtube: "https://www.youtube.com/watch?v=-SuAzlYzpJk&index=2&list=PLkgloM3XaRGhCDMRLsBbRiVaILQ2u44_g"
    },
    {
        romaji: "kubi nage",
        swedish: "hals, kast",
        technique: "Nage waza",
        beltjudo: "Yellow",
        rank: "5 kyu",
        order: 8,
        youtube: "https://www.youtube.com/watch?v=K_jPo0y2450&list=PLkgloM3XaRGhCDMRLsBbRiVaILQ2u44_g&index=8"
    },
    {
        romaji: "kuzure kesa gatame",
        swedish: "variant, buddhistiskt klädesplagg, fasthållning",
        technique: "Ne waza",
        beltjudo: "Yellow",
        beltjujutsu: "Yellow",
        rank: "5 kyu",
        order: 3,
        youtube: "https://www.youtube.com/watch?v=uPDfgMMTgwk&index=3&list=PLkgloM3XaRGiRHparlJ2DFtpx8S4Cnlke"
    },
    {
        romaji: "kuzure yoko shiho gatame",
        swedish: "variant, sida, i fyra riktningar, fasthållning",
        technique: "Ne waza",
        beltjudo: "Yellow",
        beltjujutsu: "Yellow",
        rank: "5 kyu",
        order: 4,
        youtube: "https://www.youtube.com/watch?v=S94hl6hsq2g&index=4&list=PLkgloM3XaRGiRHparlJ2DFtpx8S4Cnlke"
    },
    {
        romaji: "mae ukemi",
        swedish: "framsida, fall",
        technique: "Ukemi waza",
        beltjudo: "Yellow",
        rank: "5 kyu",
        order: 1,
        youtube: "https://www.youtube.com/watch?v=oUeO4lBZVAY&list=PLkgloM3XaRGjNcb-ruut6PlRT7IntQkwO&index=1"
    },
    {
        romaji: "makura kesa gatame",
        swedish: "kudde?, buddhistiskt klädesplagg, fasthållning",
        technique: "Ne waza",
        beltjudo: "Yellow",
        beltjujutsu: "Yellow",
        rank: "5 kyu",
        order: 2,
        youtube: "https://www.youtube.com/watch?v=k9MYaHbYqnQ&index=2&list=PLkgloM3XaRGiRHparlJ2DFtpx8S4Cnlke"
    },
    {
        romaji: "mune gatame",
        swedish: "bröst, fasthållning",
        technique: "Ne waza",
        beltjudo: "Yellow",
        beltjujutsu: "Yellow",
        rank: "5 kyu",
        order: 5,
        youtube: "https://www.youtube.com/watch?v=JlhqZhDT1zc&index=5&list=PLkgloM3XaRGiRHparlJ2DFtpx8S4Cnlke"
    },
    {
        romaji: "o goshi",
        swedish: "stor, höft",
        technique: "Nage waza",
        beltjudo: "Yellow",
        beltjujutsu: "Orange",
        jujutsu: "Green",
        rank: "5 kyu",
        order: 5,
        youtube: "https://www.youtube.com/watch?v=GDWtRtJ23cM&list=PLkgloM3XaRGhCDMRLsBbRiVaILQ2u44_g&index=5",
        youtubeinstructional: "https://www.youtube.com/watch?v=1CZyZZjLRO0"
    },
    {
        romaji: "o soto gari",
        swedish: "stor, yttre, svepande rörelse",
        technique: "Nage waza",
        beltjudo: "Yellow",
        rank: "5 kyu",
        order: 7,
        youtube: "https://www.youtube.com/watch?v=1JL1Hw7M3cU&list=PLkgloM3XaRGhCDMRLsBbRiVaILQ2u44_g&index=7"
    },
    {
        romaji: "o uchi gari",
        swedish: "stor, insida, svepande rörelse",
        technique: "Nage waza",
        beltjudo: "Yellow",
        beltjujutsu: "Brown",
        rank: "5 kyu",
        order: 3,
        youtube: "https://www.youtube.com/watch?v=6OxoWzpwezo&index=3&list=PLkgloM3XaRGhCDMRLsBbRiVaILQ2u44_g"
    },
    {
        romaji: "tsuri goshi",
        swedish: "dra (fiske), höft",
        technique: "Nage waza",
        beltjudo: "Yellow",
        rank: "5 kyu",
        order: 6,
        youtube: "https://www.youtube.com/watch?v=OLqryPZyUuA&list=PLkgloM3XaRGhCDMRLsBbRiVaILQ2u44_g&index=6",
        youtubeinstructional: "https://www.youtube.com/watch?v=2meKovMhZb8"
    },
    {
        romaji: "uki goshi",
        swedish: "drivande, höft",
        technique: "Nage waza",
        beltjudo: "Yellow",
        rank: "5 kyu",
        order: 4,
        youtube: "https://www.youtube.com/watch?v=dFXK9plNIss&index=4&list=PLkgloM3XaRGhCDMRLsBbRiVaILQ2u44_g",
        youtubeinstructional: "https://www.youtube.com/watch?v=SNTuDRgoOtg"
    },
    {
        romaji: "ushiro ukemi",
        swedish: "baksida, fall",
        technique: "Ukemi waza",
        beltjudo: "Yellow",
        rank: "5 kyu",
        order: 2,
        youtube: "https://www.youtube.com/watch?v=rScAuU_Zcwk&list=PLkgloM3XaRGjNcb-ruut6PlRT7IntQkwO&index=2"
    },
    {
        romaji: "yoko ukemi",
        swedish: "sida, fall",
        technique: "Ukemi waza",
        beltjudo: "Yellow",
        rank: "5 kyu",
        order: 3,
        youtube: "https://www.youtube.com/watch?v=xPHFTk4MFz0&list=PLkgloM3XaRGjNcb-ruut6PlRT7IntQkwO&index=3"
    },
    {
        romaji: "harai goshi",
        swedish: "svep, höft",
        technique: "Nage waza",
        beltjudo: "Orange",
        beltjujutsu: "Brown",
        rank: "4 kyu",
        order: 8,
        youtube: "https://www.youtube.com/watch?v=0gzk4M3OA0U&index=8&list=PLkgloM3XaRGjFnXafQ7W3TxW9xZcfrxmQ"
    },
    {
        romaji: "hiza guruma",
        swedish: "knä, hjul",
        technique: "Nage waza",
        beltjudo: "Orange",
        rank: "4 kyu",
        order: 10,
        youtube: "https://www.youtube.com/watch?v=Doxd3cqrsn0&list=PLkgloM3XaRGjFnXafQ7W3TxW9xZcfrxmQ&index=10"
    },
    {
        romaji: "ippon seoi nage",
        swedish: "ett, ta upp på ryggen, kast",
        technique: "Nage waza",
        beltjudo: "Orange",
        beltjujutsu: "Green",
        rank: "4 kyu",
        order: 4,
        youtube: "https://www.youtube.com/watch?v=4m8Qf3X-eW4&index=4&list=PLkgloM3XaRGjFnXafQ7W3TxW9xZcfrxmQ"
    },
    {
        romaji: "kami shiho gatame",
        swedish: "ställning(?), i fyra riktningar, fasthållning",
        technique: "Ne waza",
        beltjudo: "Orange",
        beltjujutsu: "Orange",
        rank: "4 kyu",
        order: 2,
        youtube: "https://www.youtube.com/watch?v=uFLgrehPr2c&list=PLkgloM3XaRGjxFKsCG542WwaVXMB3wZn2&index=2"
    },
    {
        romaji: "ko soto gake",
        swedish: "liten, yttre, krok",
        technique: "Nage waza",
        beltjudo: "Orange",
        rank: "4 kyu",
        order: 2,
        youtube: "https://www.youtube.com/watch?v=QpE9TREP9ys&index=2&list=PLkgloM3XaRGjFnXafQ7W3TxW9xZcfrxmQ"
    },
    {
        romaji: "ko soto gari",
        swedish: "liten, yttre, svepande rörelse",
        technique: "Nage waza",
        beltjudo: "Orange",
        rank: "4 kyu",
        order: 1,
        youtube: "https://www.youtube.com/watch?v=H84aXkA3e7g&list=PLkgloM3XaRGjFnXafQ7W3TxW9xZcfrxmQ&index=1"
    },
    {
        romaji: "koshi guruma",
        swedish: "höft, hjul",
        technique: "Nage waza",
        beltjudo: "Orange",
        beltjujutsu: "Green",
        rank: "4 kyu",
        order: 3,
        youtube: "https://www.youtube.com/watch?v=nrzxjDcsbL4&list=PLkgloM3XaRGjFnXafQ7W3TxW9xZcfrxmQ&index=3"
    },
    {
        romaji: "kuzure kami shiho gatame",
        swedish: "variant, ställning(?), i fyra riktningar, fasthållning",
        technique: "Ne waza",
        beltjudo: "Orange",
        beltjujutsu: "Orange",
        rank: "4 kyu",
        order: 3,
        youtube: "https://www.youtube.com/watch?v=noaBgIcgO88&index=3&list=PLkgloM3XaRGjxFKsCG542WwaVXMB3wZn2"
    },
    {
        romaji: "morote seoi nage",
        swedish: "med båda händerna, ta upp på ryggen, kast",
        technique: "Nage waza",
        beltjudo: "Orange",
        beltjujutsu: "Blue",
        rank: "4 kyu",
        order: 5,
        youtube: "https://www.youtube.com/watch?v=ioVYXB7Z-sw&list=PLkgloM3XaRGjFnXafQ7W3TxW9xZcfrxmQ&index=5"
    },
    {
        romaji: "sasae tsuri komi ashi",
        swedish: "stöd, dra (fiske), ta(?), höft",
        technique: "Nage waza",
        beltjudo: "Orange",
        rank: "4 kyu",
        order: 9,
        youtube: "https://www.youtube.com/watch?v=lWtn1qEHyTo&list=PLkgloM3XaRGjFnXafQ7W3TxW9xZcfrxmQ&index=9"
    },
    {
        romaji: "tai otoshi",
        swedish: "kropp, nedfällning",
        technique: "Nage waza",
        beltjudo: "Orange",
        beltjujutsu: "Blue",
        rank: "4 kyu",
        order: 7,
        youtube: "https://www.youtube.com/watch?v=4IpweRu1KB0&index=7&list=PLkgloM3XaRGjFnXafQ7W3TxW9xZcfrxmQ"
    },
    {
        romaji: "tsuri komi goshi",
        swedish: "dra (fiske), ta(?), höft",
        technique: "Nage waza",
        beltjudo: "Orange",
        rank: "4 kyu",
        order: 6,
        youtube: "https://www.youtube.com/watch?v=73bThxi0q0s&index=11&list=PLkgloM3XaRGjFnXafQ7W3TxW9xZcfrxmQ"
    },
    {
        romaji: "ushiro kesa gatame",
        swedish: "baksida, buddhistiskt klädesplagg, fasthållning",
        technique: "Ne waza",
        beltjudo: "Orange",
        beltjujutsu: "Orange",
        rank: "4 kyu",
        order: 1,
        youtube: "https://www.youtube.com/watch?v=eekPtd_n0a8&index=1&list=PLkgloM3XaRGjxFKsCG542WwaVXMB3wZn2"
    },
    {
        romaji: "yoko shiho gatame",
        swedish: "sida, i fyra riktningar, fasthållning",
        technique: "Ne waza",
        beltjudo: "Orange",
        beltjujutsu: "Yellow",
        rank: "4 kyu",
        order: 4,
        youtube: "https://www.youtube.com/watch?v=H34sVtj3vg8&list=PLkgloM3XaRGjxFKsCG542WwaVXMB3wZn2&index=4"
    },
    {
        romaji: "hane goshi",
        swedish: "vinge, höft",
        technique: "Nage waza",
        beltjudo: "Green",
        rank: "3 kyu",
        order: 3,
        youtube: "https://www.youtube.com/watch?v=TTLgAT_uEis&index=3&list=PLkgloM3XaRGhjxs_5bcBsvcLb2O4A-N8B"
    },
    {
        romaji: "harai tsurikomi ashi",
        swedish: "svep, dra (fiske), ben",
        technique: "Nage waza",
        beltjudo: "Green",
        rank: "3 kyu",
        order: 2,
        youtube: "https://www.youtube.com/watch?v=vjwerq6UZIs&index=2&list=PLkgloM3XaRGhjxs_5bcBsvcLb2O4A-N8B"
    },
    {
        romaji: "kata gatame",
        swedish: "skuldra, fasthållning",
        technique: "Ne waza",
        beltjudo: "Green",
        beltjujutsu: "Orange",
        rank: "3 kyu",
        order: 3,
        youtube: "https://www.youtube.com/watch?v=1j0V2xbdQdg&list=PLkgloM3XaRGjMKBpcAYzbZlBXgQEkNC53&index=3"
    },
    {
        romaji: "kuzure tate shiho gatame",
        swedish: "variant, vertikal, i fyra riktningar, fasthållning",
        technique: "Ne waza",
        beltjudo: "Green",
        beltjujutsu: "Orange",
        rank: "3 kyu",
        order: 2,
        youtube: "https://www.youtube.com/watch?v=i9VUQhqxYJU&list=PLkgloM3XaRGjMKBpcAYzbZlBXgQEkNC53&index=2"
    },
    {
        romaji: "okuri ashi barai",
        swedish: "par, ben, svep",
        technique: "Nage waza",
        beltjudo: "Green",
        rank: "3 kyu",
        order: 1,
        youtube: "https://www.youtube.com/watch?v=mUnkPZSgHCY&index=1&list=PLkgloM3XaRGhjxs_5bcBsvcLb2O4A-N8B"
    },
    {
        romaji: "seoi otoshi",
        swedish: "ta upp på ryggen, nedfällning",
        technique: "Nage waza",
        beltjudo: "Green",
        rank: "3 kyu",
        order: 5,
        youtube: "https://www.youtube.com/watch?v=nwxea1AoHK8&index=5&list=PLkgloM3XaRGhjxs_5bcBsvcLb2O4A-N8B"
    },
    {
        romaji: "sumi gaeshi",
        swedish: "hörn, vändning",
        technique: "Nage waza",
        beltjudo: "Green",
        rank: "3 kyu",
        order: 7,
        youtube: "https://www.youtube.com/watch?v=kod5QHdmE7E&index=7&list=PLkgloM3XaRGhjxs_5bcBsvcLb2O4A-N8B"
    },
    {
        romaji: "tate shiho gatame",
        swedish: "vertikal, i fyra riktningar, fasthållning",
        technique: "Ne waza",
        beltjudo: "Green",
        beltjujutsu: "Orange",
        rank: "3 kyu",
        order: 1,
        youtube: "https://www.youtube.com/watch?v=9KysCnKFuLE&index=1&list=PLkgloM3XaRGjMKBpcAYzbZlBXgQEkNC53"
    },
    {
        romaji: "tomoe nage",
        swedish: "hjul, kast",
        technique: "Nage waza",
        beltjudo: "Green",
        rank: "3 kyu",
        order: 6,
        youtube: "https://www.youtube.com/watch?v=tOIbQ2cXRHU&index=6&list=PLkgloM3XaRGhjxs_5bcBsvcLb2O4A-N8B"
    },
    {
        romaji: "uchi mata",
        swedish: "insida, ?",
        technique: "Nage waza",
        beltjudo: "Green",
        rank: "3 kyu",
        order: 4,
        youtube: "https://www.youtube.com/watch?v=O93a4H5dEis&index=4&list=PLkgloM3XaRGhjxs_5bcBsvcLb2O4A-N8B"
    },
    {
        romaji: "ashi guruma",
        swedish: "ben, hjul",
        technique: "Nage waza",
        beltjudo: "Blue",
        rank: "2 kyu",
        order: 4,
        youtube: "https://www.youtube.com/watch?v=0cCsllLrClY&list=PLkgloM3XaRGg3S-MP_QCWxt67TSsd6hge&index=4"
    },
    {
        romaji: "o guruma",
        swedish: "stor, hjul",
        technique: "Nage waza",
        beltjudo: "Blue",
        rank: "2 kyu",
        order: 3,
        youtube: "https://www.youtube.com/watch?v=HAuCuneVir0&index=3&list=PLkgloM3XaRGg3S-MP_QCWxt67TSsd6hge"
    },
    {
        romaji: "o soto guruma",
        swedish: "stor, yttre, hjul",
        technique: "Nage waza",
        beltjudo: "Blue",
        rank: "2 kyu",
        order: 7,
        youtube: "https://www.youtube.com/watch?v=SnG36ufXnk0&index=7&list=PLkgloM3XaRGg3S-MP_QCWxt67TSsd6hge"
    },
    {
        romaji: "o soto otoshi",
        swedish: "stor, yttre, nedfällning",
        technique: "Nage waza",
        beltjudo: "Blue",
        beltjujutsu: "Orange",
        rank: "2 kyu",
        order: 8,
        youtube: "https://www.youtube.com/watch?v=izHL_CDSx_Q&list=PLkgloM3XaRGg3S-MP_QCWxt67TSsd6hge&index=8"
    },
    {
        romaji: "sode tsuri komi goshi",
        swedish: "ärm, dra (fiske), ta(?), höft",
        technique: "Nage waza",
        beltjudo: "Blue",
        rank: "2 kyu",
        order: 1,
        youtube: "https://www.youtube.com/watch?v=ichGQmoOt-8&index=1&list=PLkgloM3XaRGg3S-MP_QCWxt67TSsd6hge"
    },
    {
        romaji: "soto maki komi",
        swedish: "ärm, ?, ta(?)",
        technique: "Nage waza",
        beltjudo: "Blue",
        rank: "2 kyu",
        order: 2,
        youtube: "https://www.youtube.com/watch?v=GE8ITtd-b8Q&index=2&list=PLkgloM3XaRGg3S-MP_QCWxt67TSsd6hge"
    },
    {
        romaji: "tani otoshi",
        swedish: "dal, nedfällning",
        technique: "Nage waza",
        beltjudo: "Blue",
        beltjujutsu: "Brown",
        rank: "2 kyu",
        order: 6,
        youtube: "https://www.youtube.com/watch?v=Rfi6zRDQQRI&index=6&list=PLkgloM3XaRGg3S-MP_QCWxt67TSsd6hge"
    },
    {
        romaji: "uki waza",
        swedish: "drivande, teknik",
        technique: "Nage waza",
        beltjudo: "Blue",
        beltjujutsu: "Brown",
        rank: "2 kyu",
        order: 5,
        youtube: "https://www.youtube.com/watch?v=Ue04ZUBSXoM&list=PLkgloM3XaRGg3S-MP_QCWxt67TSsd6hge&index=5"
    },
    {
        romaji: "ushiro goshi",
        swedish: "baksida, höft",
        technique: "Nage waza",
        beltjudo: "Blue",
        rank: "2 kyu",
        order: 9,
        youtube: "https://www.youtube.com/watch?v=LU7KEHsAQso&index=9&list=PLkgloM3XaRGg3S-MP_QCWxt67TSsd6hge"
    },
    {
        romaji: "utsuri goshi",
        swedish: "?, höft",
        technique: "Nage waza",
        beltjudo: "Blue",
        rank: "2 kyu",
        order: 10,
        youtube: "https://www.youtube.com/watch?v=WYEEP8Hhwb0&index=10&list=PLkgloM3XaRGg3S-MP_QCWxt67TSsd6hge"
    },
    {
        romaji: "kata guruma",
        swedish: "skuldra, hjul",
        technique: "Nage waza",
        beltjudo: "Brown",
        beltjujutsu: "Blue",
        rank: "1 kyu",
        order: 7,
        youtube: "https://www.youtube.com/watch?v=yD09HBiPgEU&list=PLkgloM3XaRGiMta5veDQ9u4QMkMxqOZEL&index=7"
    },
    {
        romaji: "morote gari",
        swedish: "med båda händerna, svepande rörelse",
        technique: "Nage waza",
        beltjudo: "Brown",
        rank: "1 kyu",
        order: 6,
        youtube: "https://www.youtube.com/watch?v=sggG30FTrCk&list=PLkgloM3XaRGiMta5veDQ9u4QMkMxqOZEL&index=6"
    },
    {
        romaji: "sukui nage",
        swedish: "ösa upp, kast",
        technique: "Nage waza",
        beltjudo: "Brown",
        beltjujutsu: "Blue",
        rank: "1 kyu",
        order: 9,
        youtube: "https://www.youtube.com/watch?v=LfBesVQaHXU&list=PLkgloM3XaRGiMta5veDQ9u4QMkMxqOZEL&index=9"
    },
    {
        romaji: "sumi otoshi",
        swedish: "hörn, nedfällning",
        technique: "Nage waza",
        beltjudo: "Brown",
        rank: "1 kyu",
        order: 5,
        youtube: "https://www.youtube.com/watch?v=uTYru2xGYcM&index=5&list=PLkgloM3XaRGiMta5veDQ9u4QMkMxqOZEL"
    },
    {
        romaji: "te guruma",
        swedish: "hand, hjul",
        technique: "Nage waza",
        beltjudo: "Brown",
        rank: "1 kyu",
        order: 8,
        youtube: "https://www.youtube.com/watch?v=3urpXBb8r84&index=8&list=PLkgloM3XaRGiMta5veDQ9u4QMkMxqOZEL"
    },
    {
        romaji: "uki otoshi",
        swedish: "drivande, nedfällning",
        technique: "Nage waza",
        beltjudo: "Brown",
        rank: "1 kyu",
        order: 4,
        youtube: "https://www.youtube.com/watch?v=hJL6Tz7SlZk&index=4&list=PLkgloM3XaRGiMta5veDQ9u4QMkMxqOZEL"
    },
    {
        romaji: "ura nage",
        swedish: "motsatt, kast",
        technique: "Nage waza",
        beltjudo: "Brown",
        rank: "1 kyu",
        order: 10,
        youtube: "https://www.youtube.com/watch?v=6Ag8Gl76BQs&list=PLkgloM3XaRGiMta5veDQ9u4QMkMxqOZEL&index=10"
    },
    {
        romaji: "yoko gake",
        swedish: "sida, krok",
        technique: "Nage waza",
        beltjudo: "Brown",
        rank: "1 kyu",
        order: 2,
        youtube: "https://www.youtube.com/watch?v=ZjIL-u46po4&index=2&list=PLkgloM3XaRGiMta5veDQ9u4QMkMxqOZEL"
    },
    {
        romaji: "yoko guruma",
        swedish: "sida, hjul",
        technique: "Nage waza",
        beltjudo: "Brown",
        beltjujutsu: "Brown",
        rank: "1 kyu",
        order: 3,
        youtube: "https://www.youtube.com/watch?v=eLcaT8HATRA&index=3&list=PLkgloM3XaRGiMta5veDQ9u4QMkMxqOZEL"
    },
    {
        romaji: "yoko otoshi",
        swedish: "sida, nedfällning",
        technique: "Nage waza",
        beltjudo: "Brown",
        beltjujutsu: "Blue",
        rank: "1 kyu",
        order: 1,
        youtube: "https://www.youtube.com/watch?v=j-cEU2vGAP8&index=1&list=PLkgloM3XaRGiMta5veDQ9u4QMkMxqOZEL"
    },
    {
        romaji: "ashi garami",
        beltjujutsu: "Blue"
    },
    {
        romaji: "ashi kannuki",
        beltjujutsu: "Blue"
    },
    {
        romaji: "empi",
        beltjujutsu: "Orange"
    },
    {
        romaji: "gyaku juji jime",
        beltjujutsu: "Blue"
    },
    {
        romaji: "gyaku tsuki",
        beltjujutsu: "Orange"
    },
    {
        romaji: "hadaka jime",
        beltjujutsu: "Green"
    },
    {
        romaji: "hiji gatame",
        beltjujutsu: "Brown"
    },
    {
        romaji: "hiza hishigi",
        beltjujutsu: "Blue"
    },
    {
        romaji: "hiza hishigiri",
        beltjujutsu: "Brown"
    },
    {
        romaji: "hiza osae gatame",
        beltjujutsu: "Blue"
    },
    {
        romaji: "hiza tori garami",
        beltjujutsu: "Green"
    },
    {
        romaji: "kannuki gatame",
        beltjujutsu: "Brown"
    },
    {
        romaji: "kata ashi eri hishigi",
        beltjujutsu: "Brown"
    },
    {
        romaji: "kata ashi hishigi",
        beltjujutsu: "Brown"
    },
    {
        romaji: "kata ha jime",
        beltjujutsu: "Green"
    },
    {
        romaji: "kata juji jime",
        beltjujutsu: "Blue"
    },
    {
        romaji: "kizami tsuki",
        beltjujutsu: "Orange"
    },
    {
        romaji: "koshi jime",
        beltjujutsu: "Brown"
    },
    {
        romaji: "kote gaeshi",
        beltjujutsu: "Orange"
    },
    {
        romaji: "kote hineri",
        beltjujutsu: "Green"
    },
    {
        romaji: "kote mawashi",
        beltjujutsu: "Blue"
    },
    {
        romaji: "kote mawashi gatame",
        beltjujutsu: "Blue"
    },
    {
        romaji: "mae geri",
        beltjujutsu: "Yellow"
    },
    {
        romaji: "mawashi geri",
        beltjujutsu: "Yellow"
    },
    {
        romaji: "mawashi tsuki",
        beltjujutsu: "Green"
    },
    {
        romaji: "nami juji jime",
        beltjujutsu: "Blue"
    },
    {
        romaji: "okuri eri jime",
        beltjujutsu: "Green"
    },
    {
        romaji: "shiho nage",
        beltjujutsu: "Green"
    },
    {
        romaji: "shiho nage gatame",
        beltjujutsu: "Green"
    },
    {
        romaji: "soto uke",
        beltjujutsu: "Yellow"
    },
    {
        romaji: "tate hishigi",
        beltjujutsu: "Brown"
    },
    {
        romaji: "uchi uke",
        beltjujutsu: "Yellow"
    },
    {
        romaji: "ude garami",
        beltjujutsu: "Green"
    },
    {
        romaji: "ude henkan gatame",
        beltjujutsu: "Green"
    },
    {
        romaji: "ude hishigi hara gatame",
        beltjujutsu: "Blue"
    },
    {
        romaji: "ude hishigi hiza gatame",
        beltjujutsu: "Orange",
        jujutsu: "Blue"
    },
    {
        romaji: "ude hishigi juji gatame",
        beltjujutsu: "Green"
    },
    {
        romaji: "ude hishigi ude gatame",
        beltjujutsu: "Green"
    },
    {
        romaji: "ude hishigi waki gatame",
        beltjujutsu: "Orange"
    },
    {
        romaji: "ude osae",
        beltjujutsu: "Yellow"
    },
    {
        romaji: "ude osae gatame",
        beltjujutsu: "Orange"
    },
    {
        romaji: "ura mawashi geri",
        beltjujutsu: "Green"
    },
    {
        romaji: "yoko geri",
        beltjujutsu: "Green"
    },
    {
        romaji: "o soto osae",
        beltjujutsu: "Brown"
    },
    {
        romaji: "san ren uke",
        beltjujutsu: "Brown"
    },
    {
        romaji: "ushiro geri",
        beltjujutsu: "Brown"
    },
    {
        romaji: "hiza geri",
        beltjujutsu: "Brown"
    }
];

export default data;
