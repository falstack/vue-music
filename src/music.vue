<style lang="sass" rel="scss">

    $music-width: 563px;
    $music-padding: 10px;
    $toggle-width: 22px;
    $music-face-size: 90px;
    $music-height : 115px;
    $color-blue: #00bfef;
    $color-gray-light: #e5e9ef;
    $color-gray-bg : #edece9;
    $color-gray: #99a2aa;
    $color-gray-hover: #6d757a;

    #music {
        width: $music-width;
        height: $music-height;
        position: fixed;
        bottom: 30px;
        background-color: #fff;
        box-shadow: 3px 1px 6px rgba(0,0,0,.25);
        border-radius: 0 4px 4px 0;
        z-index: 1000;
        transition: left .6s ease;
        display: flex;
        font-family: -apple-system,"Helvetica Neue",Arial,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;

        a {
            cursor: pointer;
        }

        div {
            box-sizing: border-box;
        }

        button {
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
            background-color: transparent;
            outline: none;
            border: none;
            cursor: pointer;
            padding: 0;
        }

        .toggle {
            width: $toggle-width;
            height: 100%;
            border-radius: 0 4px 4px 0;
            background-color: $color-blue;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAECklEQVR4Xu2aj1EVMRCHdytQKkAqECpAKlArUCsQKxAqECpQKhAqUCsAKsAOgArW+Z6bmfjm/Ulyl+TwvcwwA8Plvdsvv/1ls3cqGz50w+OXLYCtAjacwDYFNlwAdUzQzJ6r6sNTgDt6CpjZTxHZVdW9TQVwIiKfReRUVfl90qOGAl6IyJ1H/UFVv02ZwOgACNbT4NADPxORc1X9PUUQtQC8F5GvcwGjBPzh15RgVAHgKmAXeLZk1VHDJUBU9aqnMmoCQPofE4IDFDAue8CoCSA2wwQOs0tQBqmCZzSpI6oBmDPDcxEJAb1yGvsrUoRrj1X1IpVc6XW1AQQzXFgTUDGKCCCA8kZEXs4Fgmm+ramG2gAIEFljhkeqSkBLh5mRNkA7jtSBGph7U7rKq+ZVBeBpQE6/8xRgNVdC8DmAA0IAQfBAGN0XWgBA4tfRKpyo6mnKaroi2CFIDbbMo5R5OddUB+ArygrG+c3fnzLUgGqYvzaNcoLn2lYAFlWGYdujXrhaVR26Ejhf3KjqQW6QXT0gyulghsvuh/+z0vwA5J98N7NQWO2NWUo3UcCcGaYu4Kw6DDAiFYx6wmwJgL3+R2r00XWhVMY4Q8k8Wp+hGQBXATLfpVniAYaqkD/D8XkVI+bfqipF0yijNQD29S+r3DyqDkOVyDbKD+AYoxZGrQEQ1L2IXKgqO0PyMDPUgvRRymgQmgKIzPC1iODm2ZWdmSF/qksr/YyYeg8AwQyL3dzMQnWZraR5yTUHEJnh/ZCixsxC93lQXdALQLj5g9JTnpslu8LZkPZ7LwChWzRIwl4dHg5RUhcAngYUNTh6kRn6Z8z8RFWL4yiemLx/LbnQ3fy7iBSboUNgNyhOpW4AIjO8G3LONzMAFB+TewMY7OT+FIomy9pO0yIx9gYQzJA2OGVy9jAzuk1JzZXJAfA0mHV7VHUnO/q/zyHtSZpgCNbMQrco2wy9FqBXSGVYNLqmQASBM8F1rhl6k2RfVdlSi8ZUAFRpd6UQmQqAwWaYEuykTNDlSyVI8Ax2gYfW7xY1V4CZ8ZSIYJcZF0+PinM6VwnNAPgZntI3rPiye6UlPlrPbx2QJgCirW7d/cz+P2RfT/qC6KLqAMyMd4Wy+n9DDjeTAmBmoQuce187Jf3C3C+Zqa1kUsoc7+KWPAh5VFW6x01GFQBeonJIWWd4i4IsPhiVEKsFIBxzc+/pke1xzIef626gFgAefpTImGMtZXGzMTqAAbk/qEFaSqwGgBLnv+VNsVbOH8OqAWDZ2yDLFqnLyoebqQEg9Q1RDI9eXtOcn1+F0QHwBQkFEG+AEnz3V+irAHAIPLQgHUItQNeH/h8vRXcPvFoKlLpxr3nVFNAroNzv3QLIJfa/Xf8HsXeZUPFFXZ4AAAAASUVORK5CYII=);
            z-index: -1;
        }

        .M-main {
            padding: $music-padding;
            width: $music-width - $toggle-width;
            height: 100%;
            flex: 1;
            display: flex;
            flex-direction: column;
            position: relative;
        }

        .M-face {
            width: $music-height - 2 * $music-padding;
            height: $music-height - 2 * $music-padding;
            margin-right: $music-padding;
        }

        .M-warp {
            height: $music-height - 2 * $music-padding;
            display: flex;
        }

        .M-control {
            flex: 1;
            display: flex;
            flex-direction: column;

            span {
                color: $color-gray;
                font-size: 12px;
            }

            .header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 14px;
                
                .menu-btn {
                    background-repeat: no-repeat;
                    background-position: center;
                    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAgCAYAAABkWOo9AAABRUlEQVRYR+2WwU3DMBiF308XKBPQDSgbMAIXnAPCoZe63MoG3YD0BOWSpBKHhgMZoRvQERgBjgjBjwJYDVUj1dUvlEb2LYrz8vy9+MWEHRm0Iz7hjUon1QyiN9PsgoAQjHwQqnGZ0iSdJUx0IEWOwAujg6sqvUqid/dZlz/wZB+kFo76Z2pRXE+mD0OAr6VMWp1PoHepVbJOdyujBek9IK6F0W9y6WwEomMwz00YjFai/7knNda8oyzdjM0kBUtCxxOVoNi8b/Q2zSIQDol4bM6D3K4wjh/bb633okc7guSeB1r1nAv/T6kzXkyo9q1IrQp/xcyr0aptjdau8IvoidAFcVSOvvQbPZGLnnKjTyPn6OUMyCj5HpXhuFTxRP+VaFXh/x4BRU/4AHzh1+qEn4Co4wvfYcf5enKAtdFUT3QjTA6TvgCUWZsh4jKUuwAAAABJRU5ErkJggg==);
                    background-size: 20px;
                    width: 20px;
                    height: 20px;
                    transition: .4s;
                }

                .menu-click {
                    transform:rotate(-90deg);
                    -ms-transform:rotate(-90deg);
                    -moz-transform:rotate(-90deg);
                    -webkit-transform:rotate(-90deg);
                    -o-transform:rotate(-90deg);
                }
            }

            .center {
                flex: 1;
                display: flex;

                .M-model {
                    margin-right: 20px;
                }

                .M-play-control {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;

                    .play-wait {
                        background-image: url(data:image/png;base64,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);
                    }

                    .play-go {
                        background-image: url(data:image/png;base64,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);
                    }

                    .prev {
                        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABZklEQVRYR+2W4U3DMBCF79kD0A3oBljnAdoNYAPYAJig3QA2aNkANigD2PIIXYEJjE5KpAgSx0kcKqHkZ2L7vrx7vjvQhR9cOD4tAIsCSQWMMSsANzHGrxBCGGJYY8xaa71xzr2l9iUBrLVHIrqXA5xzWekSaKXUDsCT7IsxPnvvX7sgkocy8wnAJheAmR+I6AXAqhHwwzl3NytAJfeBiLY/A8UYP733v97X6yYrwMx7ALuuP5wNwBizVUodAKxTJisOICbTWovcnXltAhUFYGZxtji8abLk7SwGQESnNpP11YaSAH2xWr//HwCpaAD2RHQ1RIpiCkgprgqOlNXbXIiiAHVQa61cQekTvWrMAiAgVT0QiKQaswHUalQV8Qjgui0tswPUaiilpCc8/nkzagZsU2OSAmMGEgFqdshJA4kYTfxGROcQwjn36lVpkZHMOOfeR49kQwKOXZs15409PGffArAo8A2FNd8hJ3FJnAAAAABJRU5ErkJggg==);
                    }

                    .next {
                        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABRklEQVRYR+2W0W3DIBCG7zboBu0IFgzQjtARnA3SDewJ6o6QDTKCOwDoukG6QTIAdxUSSDSV7QTZuA/mFQ4+fu6OH2HlgSufDxvApsCkAlrrV+ccEdHpnoStquoJER9F5IuIzkOxowBKqT0ivvtgEWmste2tEFprCWsPxpg6F6BHxOcYLCInZt4RUT8FEgFE5NNa+zILQALSMXM7Ju2iAOFJRtVYHCCR9Oic88/yK9FKAvgEPSPizhhzjGBFAa7UePMluxZAVKMBgC7kyvxVMFWC6fwiZfjvAfytYwMrrcAltOxujSQ8OOf2sR8UAxCRb2aur/+HIgAi0lprfcn9GYsC+MQKtx70CEsBXACgTlvuUEnOBZAakg9mbsa+4BRmFkPiN1RK1czcZ1iyCgAeAMDbuTxLdk/Hy107aUpzN741bgPYFPgB0WE7MPsLEL4AAAAASUVORK5CYII=);
                    }

                    .M-model-list {
                        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACvUlEQVRYR8VX0XHbMAwFxAHiThBvUIYcIO4ETSdwMkGTCeps4ExQe4KmE8QdgAw7QdwNmgFI9KCjfJRMW2KtO+tXFPEAvPcAIZz5wTPHhyIASqklIn703j8459wY4IsAaK1XADDnwES0CiEwkL+nACkCwIGklLOqqlaIeElEHHxprX38XxDFAJpASqkFIt4DwAURbUMId865TSmQXgBSyokQ4jMRTTOXTyKI5tUXY8xzCYiDAKSU06qqviHi7ZALiei3tVamZ7lKAHAZQnh0zm1z92QBKKVuEfF7JNsf7nMIoY/1224QpZRj1USuPFhrmcStZw9AEvydiO5zHw2pSMIVTmYZuXLXva8FgBkuhHgBgHfv/WwsrUsppRCCCXrhvf+UkrUFQCm1ZXl576+6weMl18aYJ85OKVUrIFeNEMLPzPdNcs4Yc9V8twOgtb4BgB8AsDbG7BFPKbVBRAaASaWy3SCiX9baWfdlYmQ7taQAapfLZR8NiGU4bcrHII5wYY+Q8Q5uxWua5A5AZOzUGDMpIVnpWa01u+db04a0AnSodLHnzOS5tfZD9IhXRMyCJaInay1zZO9JW8kvSwCwqcy4txHAnqaTaBtrLZ8fDoAVwKzmDEvLWnJea92qdAkJmUC1DON8mBNRtgU5GfaS8OwyjERrjKjlVmPIsPGOLtGzVszDI4TAIPoG0KD2s4tWVfXCqun6zMFhxCAQcdFY76BIedazHHmsT4jo+DA6MMFYHbz/rbvjljNDxOw8QES29htEZAc9OFmPLiRCCNZyvYR2pxh7gRDibUBl1t77RdFCkl4aJTfrrlpxRf/KZ+PCUU/J5OE98blva+7dCY9lOMZiehKAKE9eWus5EcFuvPe8IWd3wG5CJwNoLoxS4z+n69iWPcbnqjkagFRBAFD/MwxZ0UcHMEAVrSNnB/APsNHMMIbwA6MAAAAASUVORK5CYII=);
                    }

                    .M-model-loop {
                        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACqUlEQVRYR8WX4XEaMRCFd08FQCowHUSWCjCpwKSC2BXEriC4A6cCmwpCByYFSFEqCO7ALkDazDI6RnfW3emAGfjHSGg/rd7uPhDO/MEzx4dRAEqpR0T87L2/d865U8CPAtBaPwPANw5MRM8hBAZ5OwZkFAAH0loviIgzcUFEHPzRWvtwKMRogDqQUmqJiHcAMCGibQjh1jm3GQsyCCClnAohrololjl8GiHqpa/GmPUYiE4AKeWsqqofiHhTciAR/bXWynQvZwkALkIID865be6cLIBS6gYRn6LYXvmdQwhDqt+2gyilHFdN1Mq9tZZF3Ph8AEiCvxPRXe5HJRlJtMKXeYxauW2f1wCQUs6FEC8A8O69n5fUOmtkqBSllFIIwQKdeO+/pGJtACiltlxe3vvLvuAMWlXVNQAsAODVWjsfykpyOWeMuaz37wG4vgHgFwCsjDG9wtNac/2v68ooAYg9ZNfI0iykAPVi7+0zKp+XAsSn+JNecg8QFTszxkyH0pk2IwAoBohZICL6XUOnGWgslEDEOh8FoJTaIOKVMWYX+xwA3Bv2mU6fgDvVxFr7qeT2vOeQDGitO5/g7CKs2+9gGR4qwsRP7IdWVyNqdKv2k3Aac89UCyu3VjeitAIaIuQvyaa3EAJDZAcQ78sF6fIDXP9VVb0g4rTdZTuHEU8wRFwaY36WijK3TynFpoXH+pSI+odRxwTj6mD/t2qPW74ZIk6ycx6RW/uCS46HW9dk7TUkQgg2FDsT2p5ibFiEEP8KsrPy3i9HGZL00GjJ5m2rFS3692haOEurFgz7xPXQqB70hH03PIUxPQogVg6bVnY8u6cCgI33nh1y1gO2L3Q0QH1gNCls1a/is3xQfFasBSIatYU9JQDs/jOUWPSTZWAUZbL57AD/AUhEsDD2Jvd3AAAAAElFTkSuQmCC);
                    }

                    .M-model-rand {
                        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACfElEQVRYR+2W7XEaMRCGd08FmBKcCqyRCjCuwJcKAhXEHQQqCFRgqCBOBSYFSKNUYFJB7AKkzSwjEUXcGe4c8DgT/bqZO90+erUfL8IrL3zl+PBvA0gpJQAMnHOrNqWPqoBSaoWIlwBw570fO+ceS5BTAQARPSLi2Bhzl0OcDCAL+ocaWwCllEPEi5a7cgCw8N4vm2RMe6SUAyHENQDURDRExEHL/1bGmCt+lwNMAGDYtCHeY5JxYoyZl99JKYdVVd0i4jm/I6Lv8fms/JaIptZajndYGfLJqqqqEXEGAGdEtLDWjtOPlVIjRLyNgachhIVzbp0l4eZTIvoRQhjlVdEpByIIZ/aF9/6Kf6S1rgHgCwA8ee+Hzjm+rs3KAYhoHkKYlFfYCYB/mtSw1i7i8wMiYhk8ArBidXnqv1YFSqkJIn4iojED9WnrnRXIgyil1pzpxpi2bN/L1BsgltxPAPhqjOE86LVeAjAUQtznJdWH4O0CZLX/vuzvXZTorYDWmofKtff+HTedLkFfXIZSynMhxAMRfbPWNrbvQ4F6KZA6XOqG0Xisyy4X+8Rl9AKNKnUG0Fpzw/kAAEtjzIhPqrUmAHARaGs6Eih7AQCYWWunpTIHA/C0E0J85m7M0ocQ6nRipdQMET9G03FjjFmWsyAGZkh2Rtt5sQXgoUJEO34AETmgzMbs3Fp7U54kVkWalux+XNy30yXz1p0DsEw7szuNUURcee95mrVmfBxODMeju83cbLyCtZYN628/wJtZ3vJkzznafZne5LI4eJyOm2s4OAf2BWt6XxiSJyLiRNw4obROAhCTlp3QzvUdFSAm9uA5r3BUgEOu7T/ALzGKdjDAGQYvAAAAAElFTkSuQmCC);
                    }
                }

                .M-voice-control {
                    display: flex;
                    align-items: center;

                    .M-all-voice {
                        position: relative;
                        display: inline-block;
                        width: 70px;
                        height: 3px;
                        vertical-align: middle;
                        background-color: $color-gray-light;
                        cursor: pointer;
                        margin-left: 5px;
                    }

                    .M-cur-voice {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 35px;
                        height: 3px;
                        background-color: $color-blue;
                    }

                    .voice-go {
                        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABACAYAAACjgtGkAAAEk0lEQVR4Xu2b/3XTMBDHdfYApBMQJsCcBqCdgG5AOgHtBC0TtExQmKAwQcMAVs0EDRPQDiCLd3lynuOc5F+JHTvxv3H8rI/uvvdLBnG81gjAkcc6gSOQgkX0DiSKokkQBF+EEDMhxAQA5lrriyRJXvqw3l6BRFEUBUHwAADTwuJ/xHFMgDq/egOCiDMAuHetWGv9LkmSRddEegGCiPcA4LUArfVZkiTzUQMhvQjD8FEIEZUt1BhzoZT6Xnbftn/vzEKsXjwCwKTKIowxX5VSN1Xu3eY9nQAhvRBC3FaFQQscLRBEJBCXdXdxdECsXjwIIU7rwhidhXjyi8psRmMhTfSCozQKIE31YhdArMtS4ndujKEy4KpKGN9KlGmrF7sAIqUk/TrPP7tKbuMEEkXRlIouACBRLE2kKotDxRvbuoyU0jhAexM+Fsg2Tb/i+jdu2wIQcpM3xQeT+6RpSmVBwr3bBhAp5VMfFsG8eKtMFREvAeDWYSWLNE0/cC2GNSCIeAcA1Jvo/fJZCCJeAwDpw4vW+sq121JKqoU+O6B8U0ptJIwrIKQZYRg+907CvoALCLdpWmvabdYFEDEBgPfcuriKegVkn6zDl6lyYunTBRsBqa+yoSdCiHkcx2d5WCsg+6Id2cu5LMQTPZy64GtGFa0kD4QNU325UB2Xyb2js/WIiAsAeMusZ+0/gwNCCyrRBbb1GEXRqW1ObTDRWp9kEWeQQGynnsSS2/ENXcgIuEDmM9hBAqEFluw4ayWewPErjuNlmj9YINZ15gDwkUnq2PSc2hJhGFLiuXZRlFJKnYwBiGuUsdrx4uKllGxKn+nIoC3E5hj/uEgYx7GrTmOtKgu/gwbic5sjkIKZuCZ/LmHNIs3gLURK+VMI8anoNq7JHyLeAMC1S4gHDwQRWU3wuAxb0Y9GQ1w12EFqiKtlYYz5o5Ri254uixpF2HVVscYYtvlDuuGoll/jOF7OnAetIYj4zBy2Ea6GkZSS0nPqxhev4afuHuv4q5QqnkhaAnC1FI0xNLO5G6yF+I5W+GYvHotaFYODcxlb+j9xrlIippXqnjwQtujZt44ZN5HL3tGVjJVAXKuM80DYjG8PgdSeyHmy043wnO+6e08Fdg3G02TmLNnZS/XpjXcMUdar3BcgTHTxwaBDwRSauXNtbM9krWdgO0p0FJKbYXTKxDe5o/ZhEAQ0hKdO1zJccpdntPKqtZ6WjjLpofsCpe2w2zd4852BZbtKVpVpWEyzz16spS2QrR6HyJuf7W5PjDFlZ0TOXTPUJr62CyCtDszUXYTtb5I/s9P2us9rCyTvMpSwCSHuOjtSlV+sK+Z3DcRGzVmapnQwgD0ZwL3TVs6YFR9sQyNZS2P9aWshdTcgu38nQLYRrUYHxEKhxIh6nuyBFd8ujhJIBiUMw9piO1ogmRXUFdvRA8lUHwAqie1BAKkjtvm2XtOI0eR/O4syvpexpYFXbA/im7tCSUDf3znF9qC+yizLbI0xv5VSjT48auIm+f/04jLFl7YF5KUxZgoAC6317CC/7G67m7v4/15YyC4W1vSZ/wEC2bpucGsIagAAAABJRU5ErkJggg==);
                    }

                    .voice-no {
                        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABACAYAAACjgtGkAAADyUlEQVR4Xu3b/VXbMBAAcJ01QOkG6QTVOw9QmKBs0HQCwgS0EwATABNAJ4AF7LoTkBFgAPv6jifnKX7+kGS3tkTyt6xYv0gn6aSAOHz2BODgsS9wAGn0iNlBlFJHSZKcAcApER0JIR7yPD+fq+fOCqKUUkmS3APAygQgous8zzdzoMwGgohrALhpazQRvVRV9akoipf/jTILCCLeAMC6r7FlWZ4URfEUNQjHCynloxBCDTU0ehAdLx4BgAPn4CdqEI4XQohLWwzWihYEERnCecaIDkTHi3shxPHg+GgpEBVI1/rCBSYaEJ940QYVBYhvvIgORMcLXnWeugyLoBZmSqmV3nTxIsorMI7BWdSQmbLr+6IsBiRNU54qJ+v6QYMg4hUAnPk2Ysrn2nqIUupYSnnB30NE26qqzsfsiBHxgvMwQgjeVV9nWfaw2+1yzJBSPk/ZqDF1NUF4bSOl/N2os9DlnNIEXZtMIjrfgSypd7TtZdI0fRBCfG1BdkIZ2HEXO5A0TVl/cFs+5ld3ebbZQxDxCQC+dNRhhWKRfng1Qcjlhf912RaQDQBc9nxvL4oFBld9FwwIvy0iFgDw2RXFBoOI/lRVdRwUiM7Q89CxRnHB4BkrKBDuGS4oXH4oZVn3jHr6Dg7EBUUPrc6JoonB5YME0Si8biqEEB98AnwbRtAgGoUXa3xU4YTShRE8iA9KH0YUIC4oQxhRgSRJYnPmM7iiDTao1oHU9QBMCNGLEjSIB0bt2IkSLMgIjF6UIEEsMX7pXHDflPyUZdmJuY4JDsQS4y7LsrVOKvWuU4joNs/z7zVKUCAuGGbQHVq8mSjBgPhgOKK8XeMKBgQRn5t30Rp7mLdh0rWvsRk+nJQyQThR67Qn8NlU2T5jZswsEuC9GLY9hYh+miBdSVzbNkxarplCTNO0K8VphWGD0sy6d94KnLSllpW15FTbzoycMAZQXsuyXO3dQrTIWVo2Z3yxtoMqRPxhnDPzdHnr+016GF7xZWEAeCnLclMUxXYPxCbw+L6A63OLOdtdCspiQHR+ge+f8zkIX5abZeZZFIjZvfmA2aa7J0nCQa/veMCmml2ZxYLYtkKff1wJIb7ZPtNXLniQunE8EwDA25WFMZ9oQBhB/9OBe4t3/IkKRAdmryOCuldFB2LMVkNnsa0jK0qQGkVK6RxsowXxDbbRg7gG23cB4hJs3w2IbbB9VyA2wbYsy49j7qD6Lgpn+Vem+bKI2HaZzivx44tgPjc7iBFXNkS0AoCtTtY4XcadAoPrWATIVI2Zop4DSEPxL5YQHsqr5mdTAAAAAElFTkSuQmCC);
                    }
                }
            }

            .footer {
                text-align: right;
            }
        }

        .M-curBar, .M-allBar {
            display: block;
            position: absolute;
            left: 0;
            bottom: 0;
            height: 4px;
        }

        .M-curBar {
            width: 0;
            background-color: $color-blue;
        }

        .M-allBar {
            width: 100%;
            z-index: 2;
            cursor: pointer;
        }

        .M-tip {
            position: absolute;
            bottom: 12px;
            width: 50px;
            height: 17px;
            line-height: 17px;
            font-size: 10px;
            text-align: center;
            background-color: #fff;
            border: solid 1px $color-gray-light;
            border-radius: 3px;

            em {
                border-width: 8px;
                border-color: transparent;
                border-top-color: $color-gray-light;
                border-style: dashed dashed solid;
                position: absolute;
                left: 17px;
                top: 15px;
            }

            i {
                border-width: 6px;
                border-color: transparent;
                border-top-color: #fff;
                border-style: dashed dashed solid;
                position: absolute;
                left: -6px;
                top: -8px;
            }
        }

        .M-menu {
            position: absolute;
            left: 0;
            bottom: 100%;
            width: 100%;
            height: 0;
            background-color: #fff;
            box-shadow: 1px 0 1px rgba(0, 0, 0, 0.25);
            border-radius: 0 5px 0 0;
            transition: height .8s;
            overflow: hidden;
            display: flex;
            flex-direction: column;

            .header {
                height: 33px;
                background-color: $color-blue;
                padding: $music-padding;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .list {
                    color: #fff;
                    font-size: 14px;
                    font-weight: 700;
                }

                .close {
                    width: 20px;
                    height: 20px;
                    display: block;
                    border-radius: 50%;
                    background-color: #fff;
                    color: $color-blue;
                    font-size: 20px;
                    text-align: center;
                    line-height: 20px;
                    cursor: pointer;
                    font-family: Microsoft YaHei,Arial,Helvetica,sans-serif;
                }
            }

            .body {
                overflow-y: auto;
                flex: 1;

                >div {
                    padding: 5px 10px;
                }

                .title {
                    height: 30px;
                    border-bottom: 1px solid $color-gray-bg;
                    position: relative;
                    display: flex;
                    font-size: 14px;
                    color: #333;

                    .select {
                        left: 15px;
                        top: 8px;
                        z-index: 5;
                    }
                }

                .item {
                    color: $color-gray;
                    background-color: #fff;
                    font-size: 13px;
                    display: flex;
                    height: 30px;
                    line-height: 20px;

                    &:hover {
                        background-color: $color-gray-bg;
                        color: $color-gray-hover;

                        .hover {
                            display: block;
                        }
                    }

                    .hover {
                        display: none;
                        position: absolute;
                        right: 20px;
                        top: 0;
                        height: 20px;

                        .play {
                            margin-right: 5px;
                            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABSElEQVRYR+2WMW7CMBSG/0fYyw3gBnCD9iidUZFYMjQTLGmkMCARMdObhBvADcIN2gM0DxnVVdK6lg1OPJCMeXb85/fn34/g+SHP66MT0DnQqAOzMHpmxrAKOhFOmzTeyXcNC3jNAXqsnzTeb9K3p1YETMNo0uNyUBVQUu9jm8aHVgTMQs8OfDMw+sVA0SID9w6hyT1jdAxVMDFjma3ihW4RZxCqYALKPFsluV7AhYHbIXwJozWYx3Wa6b1Ks0qIah6Ijlkaz61ywPsWiEQLwA/VvwwCPq2TpFDVvkCfIu10NWcO6EBzBqEq0/t9FNKB//Le6i7QgaZjwJkDQgCBJ3WaaSdIt60x6CBIV82TtT8MqJoHoNyLs25bk02HVUNia7NMQmdbYJLbTYz5uQu8O6DLe9saES5Nh/eGxGTLjK5jkw9dO6YTcAZlW0kwunbEUgAAAABJRU5ErkJggg==);
                        }
                        
                        .menu {
                            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC0UlEQVRYR91WUVLaUBQ9N6H+1h1oV6BdQXEF1RWovx2Y4gzMQH7EjxKnpNO0pP2trqC4AuIKSlcg7gA/pUlO5wKJgaIBK9VpPt/c3Hfuueee+wSP/Mkj34//F0ChYrkgNwTomjl+co+Pe7PYXhoDxYrFiQtJt+XYB9MglgKgUK7mRYwOiDOAPgV1gTwn0M39Wtly3Xo/BrIUAMWKtQfgG4kjz2nUS6X6apC79kVkIz77JwBC4OXXZqOrl41ADLoiWDPN6EWsiaUwcNtoF8u1EkQ+gjxoObarcQmAYtlqQ/CapJ/LcT8MpQPIeoZPnLSajf10zLDSZ4MOyL5OgMDwPzvvzoYsVKvrYWhcqDZaTmN7JgCA56bJvSAwfKXrTgCpRHFcIsDJEehFEepfPtino+ngeatp5ycAPJQjFspWXQSHKjYY7Eoke8qs5ifYFsj2kgHUTkRkl4y2POfY14vfVKxNg9TzjVGhS2SgWKn5gLxqNRsTAr9tFO81BSMxyZpp8nLaYrXHJC49p/GHgMejWMoFK25sRnMD0J/D3PUhMOzpaqIZog9B2zSjo0ForJrAj7TKs7Q1FwDtoUl09GKCVzpeJHoiWCewqTYLok/AFUF92u3uApEJYFT54GJ4OXGUpi9OnBjM+IDCHe+93c6qfmIM4/UJQd9r2jvTybOqUl0EgbRV6WmrzQJx44Rj9ZL86Tn2ZgJgfJ729duSFsqWtmVtegL+qgWF8niuM2iN20Dy1HNs3YZzfZkaSFbrjF0+Yb8wvqtOFqF/biuOWQDYI8SNgHNds2Pf3wUQV7zfajZO5ip9HJTJQFJlxXIFeDsruY4myO3YepcCQJMOHTDQZSJ5CHUseyLiL1p1GuDcDCxS1SKxTwfA9Ds+CPXplPL8RcpKxaptz3qOxyEJA4VyrTt8tYJXESQ/XCoP8Gk+r2nfLK+pnE+nBQ9Q7L1SPDoDvwGgOncwDjIoMgAAAABJRU5ErkJggg==);
                        }
                    }

                    .select {
                        left: 5px;
                        top: 3px;
                    }
                }

                .left {
                    flex: 1;
                    display: flex;
                    justify-content: space-between;
                    padding-right: 100px;
                    padding-left: 30px;
                    position: relative;
                    width: 380px;
                    overflow: hidden;

                    .icon {
                        display: block;
                        width: 14px;
                        height: 14px;
                        background-repeat: no-repeat;
                        background-position: center;
                        float: left;
                        margin-right: 8px;
                    }

                    .icon-pause {
                        background-image: url(data:image/gif;base64,R0lGODlhDgAOAJEAAAAAAP///0up5v///yH5BAEAAAMALAAAAAAOAA4AAAIenI+pqyKMHDySybrusw8PrH2dM4omWYbomZIsq7YFADs=);
                    }

                    .icon-play {
                        background-image: url(data:image/gif;base64,R0lGODlhDgAOAIABAEup5v///yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkEzQUQ5MjJEQjlBMTFFMThEMDRBNjJDNENEOTY3NjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkEzQUQ5MjFEQjlBMTFFMThEMDRBNjJDNENEOTY3NjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmRpZDozMjFGRTgzMjhCREJFMTExQkI4Njk1NTQ5Q0Y0QUZDNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMjFGRTgzMjhCREJFMTExQkI4Njk1NTQ5Q0Y0QUZDNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAkoAAEALAAAAAAOAA4AAAIejI+pqwCMHDySybrusw8HrH2dM4omWYbomZIsq7YFACH5BAkoAAEALAAAAAAOAA4AAAIejI+py+0IwIqHKhsoztLo7oEfJEpjdJpqynHs96oFACH5BAUoAAEALAAAAAAOAA4AAAIdjI+py+0PFQBwLmtwploHC07c+I1hiYrkqaYrUAAAOw==);
                    }
                }

                .right {
                    width: 120px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .select {
                    display: block;
                    position: absolute;
                    width: 12px;
                    height: 12px;
                    border-radius: 4px;
                    border: 1px solid $color-gray;
                }

                .selected {
                    &:before {
                        content: '';
                        position: absolute;
                        display: block;
                        left: 2px;
                        top: 2px;
                        width: 7px;
                        height: 7px;
                        border-radius: 3px;
                        background-color: $color-blue;
                    }
                }
            }
        }

        .menu-show {
            height: 500px;
        }

        .lg-btn {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }

        .sm-btn {
            width: 20px;
            height: 20px;
        }
    }

    .M-dot {
        margin: 0 5px;
        font-size: 12px;

        &:after {
            content: "•";
            color: $color-gray;
        }
    }

    .M-open {
        left: 0;
    }

    .M-close {
        left: -541px;
    }
</style>

<template v-cloak>
    <div id="music" :class="[ open ? 'M-open' : 'M-close' ]">
        <audio ref="audio"></audio>
        <div class="M-main">
            <div class="M-warp">
                <img class="M-face" ref="banner">
                <div class="M-control">
                    <div class="header">
                        <div>
                            <a>{{ now.name }}</a>
                            <span class="M-dot"></span>
                            <a>{{ now.player }}</a>
                        </div>
                        <button :class="['menu-btn', status.menuShow ? 'menu-click' : '']" @click="status.menuShow = !status.menuShow"></button>
                    </div>
                    <div class="center">
                        <div class="M-play-control">
                            <button class="sm-btn prev" @click="next(false)"></button>
                            <button :class="[ 'lg-btn', status.playing ? 'play-go' : 'play-wait']" ref="paused"></button>
                            <button class="sm-btn next" @click="next(true)"></button>
                            <button :class="['sm-btn', 'M-model', 'M-model-' + status.model]" @click="changeModel"></button>
                        </div>
                        <div class="M-voice-control">
                            <button :class="[ 'sm-btn', status.silent ? 'voice-no' : 'voice-go' ]" ref="muted"></button>
                            <span class="M-all-voice" ref="allvoice">
                                <span class="M-cur-voice" ref="curvoice"></span>
                            </span>
                        </div>
                    </div>
                    <div class="footer">
                        <span>{{ time.cur }} / {{ time.all }}</span>
                    </div>
                </div>
            </div>
            <span class="M-allBar" @mouseout="tipShow = false" ref="alltime">
                <span class="M-curBar" ref="curtime"></span>
            </span>
            <div class="M-tip" v-show="tipShow" ref="tip">{{ tipText }}<em><i></i></em></div>
            <div :class="['M-menu', status.menuShow ? 'menu-show' : '']">
                <div class="header">
                    <span class="list">歌曲列表</span>
                    <span class="close" @click="status.menuShow = false">&times;</span>
                </div>
                <div class="body">
                    <div class="title">
                        <a :class="['select', list.length === source.length ? 'selected' : '']" @click="selectAll"></a>
                        <div class="left">歌曲</div>
                        <div class="right">歌手</div>
                    </div>
                    <div class="item" v-for="item in source">
                        <div class="left">
                            <a :class="['select', item.selected ? 'selected' : '']" @click="musicSelect(item)"></a>
                            <div>
                                <span v-show="item.playing" :class="['icon', status.playing ? 'icon-play' : 'icon-pause']"></span>
                                <a @click="loadSource(item)">{{ item.name }}</a>
                            </div>
                            <div class="hover">
                                <button title="点击播放" class="sm-btn play" @click="loadSource(item)"></button>
                                <button title="加入列表" class="sm-btn menu" @click="musicSelect(item)"></button>
                            </div>
                        </div>
                        <span class="right">{{ item.player }}</span>
                    </div>
                </div>
            </div>
        </div>
        <button class="toggle" @click="musicToggle"></button>
    </div>
</template>

<script>

    export default {
        props: {
            source : {
                default : null,
                required : true
            }
        },
        data () {
            return {
                open : false,
                timeWidth : 541,
                voiceWidth : 70,
                tipShow : false,
                tipWidth : 25,
                tipText : "",
                init : true,
                status : {
                    playing : false,
                    silent : false,
                    menuShow : false,
                    model : "list"
                },
                time : {
                    cur : "00:00",
                    all : "00:00"
                },
                now : {},
                list : []
            }
        },
        created () {
            let i;
            for (i in this.source) {
                this.list.push(this.source[i].id);
                Vue.set(this.source[i], 'playing', false);
                Vue.set(this.source[i], 'selected', true);
            }
        },
        methods: {
            musicToggle () {
                this.open = !this.open;

                if (this.init) {

                    this.init = false;

                    this.loadSource(this.source[0], false)
                }
            },
            musicSelect (item) {
                if (item.id === this.now.id) return;
                if (item.selected) {
                    this.list.splice(this.list.indexOf(item.id), 1)
                } else {
                    this.list.push(item.id)
                }
                item.selected = !item.selected;
            },
            next (bool) {
                if (this.status.model === 'loop') return;
                let length = this.list.length;
                if (length === 0) return;
                let id = this.now.id;
                let i, j, now;
                if (this.status.model === 'list') {
                    for (i in this.list) {
                        if (this.list[i] === id)
                            break
                    }
                    now = this.list[bool ? i == length - 1 ? 0 : ++i : i == 0 ? --length : --i];
                } else {
                    now = this.list[Math.floor(Math.random() * length + 1) - 1]
                }
                for (j in this.source) {
                    if (this.source[j].id === now) {
                        this.loadSource(this.source[j]);
                        break
                    }
                }
            },
            selectAll () {
                let i;
                if (this.list.length === this.source.length) {
                    this.list = [];
                    for (i in this.source) {
                        this.source[i].selected = false
                    }
                } else {
                    this.list = [];
                    for (i in this.source) {
                        this.source[i].selected = true;
                        this.list.push(this.source[i].id)
                    }
                }
            },
            loadSource (item, bool = true) {
                if (this.now.playing !== undefined) {
                    if (this.now.id === item.id)
                        return;
                    this.now.playing = false;
                }
                item.playing = true;
                this.now = item;
                this.$refs.audio.setAttribute('src', this.now.src);
                this.$refs.banner.setAttribute('src', this.now.img);
                if (bool) {
                    this.$refs.audio.play();
                    this.status.playing = true;
                }
            },
            changeModel () {
                let ret = "";
                switch (this.status.model) {
                    case "list" :
                        ret = "rand";
                        this.$refs.audio.loop = false;
                        break;
                    case "rand" :
                        ret = "loop";
                        this.$refs.audio.loop = true;
                        break;
                    case "loop" :
                        ret = "list";
                        this.$refs.audio.loop = false;
                        break;
                }
                this.status.model = ret;
            },
            formatSeconds (second) {
                var minute = 0;
                var hour = 0;
                if (second > 60) {
                    minute = parseInt(second / 60);
                    second = (second % 60).toFixed(0);
                    if (minute > 60) {
                        hour = parseInt(minute / 60);
                        minute = parseInt(minute % 60);
                    }
                } else {
                    second = parseInt(second);
                }
                second = second < 10 ? '0' + second : second;
                minute = minute < 10 ? '0' + minute : minute;
                return [hour, minute, second];
            }
        },
        mounted () {
            var vm = this;
            var audio = this.$refs.audio;
            audio.volume = 0.5;

            audio.oncanplay = function () {
                // 缓冲已足够开始时
            };

            audio.oncanplaythrough = function () {
                // 缓冲已完成
            };

            audio.onended = function () {
                // console.log("onended : 音乐播放完毕");
                vm.status.playing = false;
                vm.next(true)
            };

            audio.onloadedmetadata = function () {
                // 数据的分辨率或时间长度已加载完成
                var time = vm.formatSeconds(this.duration);
                vm.time.all = time[1] + ":" + time[2];
            };

            audio.onplay = function () {
                // console.log("onplay : 播放开始");
            };

            audio.onwaiting = function () {
                // console.log("onwaiting : 播放过程中开始缓冲");
            };

            audio.ontimeupdate = function () {
                // 当播放位置改变时
                var time = vm.formatSeconds(this.currentTime);
                vm.$refs.curtime.style.width = vm.timeWidth * this.currentTime / this.duration + "px";
                vm.time.cur = time[1] + ":" + time[2];
            };

            audio.onplaying = function () {
                // console.log('onplaying : 播放中...');
            };

            this.$refs.muted.onclick = function () {
                vm.status.silent = !vm.status.silent;
                audio.muted = !audio.muted;
            };

            this.$refs.paused.onclick = function () {
                vm.status.playing = !vm.status.playing;
                audio.paused ? audio.play() : audio.pause()
            };

//            document.getElementById('loop').onclick = function () {
//                audio.loop = !audio.loop;
//            };

            this.$refs.allvoice.onclick = function (e) {
                audio.volume = e.layerX / vm.voiceWidth;
                vm.$refs.curvoice.style.width = e.layerX + "px";
            };

            this.$refs.alltime.onclick = function (e) {
                vm.$refs.curtime.style.width = e.layerX + "px";
                audio.currentTime = e.layerX / vm.timeWidth * audio.duration;
            };

            this.$refs.alltime.onmousemove = function (e) {
                var time = vm.formatSeconds(audio.duration / vm.timeWidth * e.layerX);
                vm.tipShow = true;
                vm.$refs.tip.style.left = e.layerX - vm.tipWidth + "px";
                vm.tipText = time[1] + ":" + time[2];
            };
        }
    }
</script>