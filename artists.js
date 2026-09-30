/* ======================================================================
 * 아티스트 데이터 (여기만 수정하면 됩니다)
 * ======================================================================
 *
 * 아티스트 추가
 *    - 아래 `artists` 배열에 객체를 하나 추가합니다.
 *    - id는 다른 아티스트와 겹치지 않는 숫자면 됩니다.
 *    - 사진(imgUrl)은 아티스트당 "한 번만" 등록하므로, 앨범을 여러 개
 *      추가해도 사진을 매번 다시 입력할 필요가 없고, 앨범마다 다른
 *      사진 URL을 잘못 입력해서 깨지는 문제도 사라집니다.
 *
 *      { id: 3, name: "새아티스트", imgUrl: "https://..." }
 * ====================================================================== */
const artists = [
    {
        id: 1,
        name: "검정치마",
        imgUrl: "https://i.namu.wiki/i/tBu9I0SXuXC3969ofx33QzRYgXYRIHXJv2Vvbt_19XDHwWVj4zGLR75BWFWrg68oOuZn2ngg68k6iRAhQQFu2m267eICLlSk4o5ppJ2UHZJ6LEio8FlNaa8gp8Jtwsf8tGiyyTAJ5KNHZa2S_vXeQA.webp"
    },
    {
        id: 2,
        name: "려진",
        imgUrl: "https://i.namu.wiki/i/N1Fq2G-EHZoKsGQ9nX-Ea-MGMfri1iIClQ12u2-_iXEjY6LJ77cjplkZA2SjYWvVIEUpodtg_pky_bilF9d22GbTQlgqCz8ZmstLglw7qd2lsYxBz0FI9R9aVRx8baThLv994Vlk59Wog8yR_9E7Xw.webp"
    },
    {
        id: 3,
        name: "바밍타이거",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVTet1chiVD-KydCkzC5a8XrS6EcKcNgOu57we8ODLlQ&s=10"
    },
    {
        id: 4,
        name: "YF",
        imgUrl: "https://i.namu.wiki/i/nGZs1QSlFk-PMPX6BUSkE_2FI64CSELQxrFfmHoQaZtqH6i8Ku64rGU1LIculK9lKcrOe3kyNd0Lknf6vqobU6qIgyG3emWJNtfsGlCf-cukAC85lEI0mYyQVJ7iOi7RHUq572PjXnV_e6InA9TVVg.webp"
    },
    {
        id: 5,
        name: "잔나비",
        imgUrl: "https://i.namu.wiki/i/E1_51zX6vV0NA4nQ71ZBW-1LNvAGuKwKtAUwtwLuujOqq-_BJW7LLM8AoQBBsnaEM1oCqqmFpBlpkUa2lJx1vvP_yh9uN50QL7UmM8m0AVt0nPZfh325JCYB5R7-YvjCsYYtFA1RUrHOMa-1ql1JPA.webp"
    },
    {
        id: 6,
        name: "창모",
        imgUrl: "https://i.namu.wiki/i/k5rXQqj6YW5xiC72SPcDORetNcRQwjvS-NY_GedzFLTYwRJZItaBV2cFs2reMGqanze-hO9wjvmTG9l_iQyYaLTErVSJZD486sYOe5Jn4Ia4y3wel-QZ-M8zmSw88eHHfhGgEJRecITRn-Rl2VKonw.webp"
    },
    {
        id: 7,
        name: "Parannoul",
        imgUrl: "https://i.namu.wiki/i/1TJRqTnseNFE20XZ6tGQ5VqaUG4dChYgbt1ChVJKbnpB9vKtcsRB52uQ8QrJH4npqtswitnFrjNGO7LDJyVWvAHrdiUQEbRKItl4UYwqntgHsOXPbwHlYoyrb4JHuHeoxrsE-mFku7GrbZzj_U225A.webp"
    },
    {
        id: 8,
        name: "저스디스",
        imgUrl: "https://i.namu.wiki/i/wGdlEsTpKmqTmIj9Qyf-fV2hDO6KFQMLaY8VpFMcZ-kBLqVgkdSoznq8n6_plx95zoe9CiwA7-6sIy1aE8JvepEYG-jf4HRTORhIBmIZSAOeYoZous5V_HCtJ-gaWXKOUuv5wIvOhRQqzCcdRhdoiw.webp"
    },
    {
        id: 9,
        name: "OSUN",
        imgUrl: "https://i.namu.wiki/i/oJrFJs7VYomEw9PBdsKP_4HG8vh6V65Ba_-Rvov7IDvqqhEeCN0FA1-BL-VRBsj3mflsCltvLoYfvNyPYp8hKmf_E0POQ1wafhAgtro4pWGNCbdl4a5f7qM7f3vOVos_T-FTWGBsGwssniJVJrFVzA.webp"
    },   
];
