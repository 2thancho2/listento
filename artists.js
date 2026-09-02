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
        imgUrl: "https://i.namu.wiki/i/G_AcjijueC6IJ0dUMLC2WDGkgcohd4tyPUFlTLwEb4wzivWuHUYwY7_JRbit_KxVh8cshaIwEok_aBLWJpFvcZ1R0K5-4oRuHMbXZG_fpzs7NVGpTR_75ZzavMHUeGxqWK9BlnRJsOXrwT8uLTM10Q.webp"
    },
    {
        id: 2,
        name: "려진",
        imgUrl: "https://i.namu.wiki/i/N1Fq2G-EHZoKsGQ9nX-Ea-MGMfri1iIClQ12u2-_iXEjY6LJ77cjplkZA2SjYWvVIEUpodtg_pky_bilF9d22GbTQlgqCz8ZmstLglw7qd2lsYxBz0FI9R9aVRx8baThLv994Vlk59Wog8yR_9E7Xw.webp"
    }
];
