# ECO2를 활용한 건축물 에너지 성능 평가
에너지 성능이 높은 건축물 보급을 확대하고 효과적인 에너지 관리를 유도하기 위해 건축물의 에너지 성능에 대한 정량적이고 객관적인 정보를 제공하고자 2009년 12월 국토교통부와 산업통상자원부가 공동으로 '건축물 에너지 효율등급 인증규정'을 고시하였습니다. 이에 건축물 에너지효율등급 인증에 관한 규칙 및 인증기준을 제·개정하였으며, 건축물 에너지 성능 계산 및 평가를 위해 시뮬레이션 도구 ECO2가 사용됩니다. 본 페이지는 건축물 에너지효율등급 인증제도와 ECO2 프로그램의 개요를 보여줍니다. 

---
## 건축물 에너지효율등급 인증제도

### 인증 대상
- 자발적 신청: 단독주택, 공동주택, 기숙사, 업무시설 등 **신축/기존 모든 용도 건축물**
- 의무 대상 (공공기관 발주 건축물):  
  - 공동주택 → **2등급 이상**  
  - 업무용 건축물 → **1등급 이상** 

### 인증 기준

각 용도별로 **단위면적당 1차에너지소요량(Primary Energy Use per m²)** 기준을 적용하여 **총 10등급**으로 분류합니다. 

<details>
<summary><strong>건축물 에너지효율등급 인증등급</strong></summary>

<br/>

<table>
  <thead>
    <tr>
      <th>등급</th>
      <th>주거용 (kWh/㎡·y)</th>
      <th>주거용 외 (kWh/㎡·y)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1+++</td><td>60 미만</td><td>80 미만</td></tr>
    <tr><td>1++</td><td>60 이상 90 미만</td><td>80 이상 140 미만</td></tr>
    <tr><td>1+</td><td>90 이상 120 미만</td><td>140 이상 200 미만</td></tr>
    <tr><td>1</td><td>120 이상 150 미만</td><td>200 이상 260 미만</td></tr>
    <tr><td>2</td><td>150 이상 190 미만</td><td>260 이상 320 미만</td></tr>
    <tr><td>3</td><td>190 이상 230 미만</td><td>320 이상 380 미만</td></tr>
    <tr><td>4</td><td>230 이상 270 미만</td><td>380 이상 450 미만</td></tr>
    <tr><td>5</td><td>270 이상 320 미만</td><td>450 이상 520 미만</td></tr>
    <tr><td>6</td><td>320 이상 370 미만</td><td>520 이상 610 미만</td></tr>
    <tr><td>7</td><td>370 이상 420 미만</td><td>610 이상 700 미만</td></tr>
  </tbody>
</table>

<br/>

<ul>
  <li>※ 주거용 건축물: 단독주택 및 공동주택(기숙사 제외)</li>
  <li>※ 기준 초과 시 "등외" 처리</li>
  <li>※ 기준에는 용도별 보정계수 적용됨</li>
</ul>

</details>



---
### 평가 방식

난방, 냉방, 급탕, 조명, 환기에 대한 에너지소요량을 전반적으로계산하고 이를 바닥면적으로 나눈 값을 사용하여 에너지 성능에 따라 10개 등급(1+++ ~ 7)으로 평가합니다. 평가를 위한 분석 툴은 **ECO2 프로그램**을 사용합니다. 

<details>
<summary><strong>건축물 에너지효율등급 인증기준</strong></summary>

$$
\text{단위면적당 1차 에너지 소요량} =
\frac{\text{난방에너지소요량}}{\text{난방이 요구되는 공간의 바닥면적}} +
\frac{\text{냉방에너지소요량}}{\text{냉방이 요구되는 공간의 바닥면적}} +
\frac{\text{급탕에너지소요량}}{\text{급탕이 요구되는 공간의 바닥면적}} +
\frac{\text{조명에너지소요량}}{\text{조명이 요구되는 공간의 바닥면적}} +
\frac{\text{환기에너지소요량}}{\text{환기가 요구되는 공간의 바닥면적}}
$$

$$
\begin{array}{l}
\text{단위면적당 1차 에너지 소요량} = \\
\quad \frac{\text{난방에너지소요량}}{\text{난방이 요구되는 공간의 바닥면적}} \\
+ \frac{\text{냉방에너지소요량}}{\text{냉방이 요구되는 공간의 바닥면적}} \\
+ \frac{\text{급탕에너지소요량}}{\text{급탕이 요구되는 공간의 바닥면적}} \\
+ \frac{\text{조명에너지소요량}}{\text{조명이 요구되는 공간의 바닥면적}} \\
+ \frac{\text{환기에너지소요량}}{\text{환기가 요구되는 공간의 바닥면적}}
\end{array}
$$


> ※ 냉방설비가 없는 주거용 건축물(단독주택 및 기숙사를 제외한 공동주택)의 경우 냉방 평가 항목 제외  
> ※ 단위면적당 1차에너지소요량 = 단위면적당 에너지소요량 $\times$ 1차에너지환산계수  

</details>

---

## ECO2 프로그램 개요

| 항목 | 내용 |
|------|------|
| 평가 방식 | Monthly Calculation Method (월별 정상상태 기준 계산) |
| 적용 기준 | ISO 13790, DIN V 18599 |
| 주요 평가 항목 | 난방, 냉방, 급탕, 조명, 환기 (5가지 시스템) |
| 입력 데이터 | 기후대(국내 13개 지역), 건물 정보, HVAC, 신재생에너지 등 |
| 출력 결과 | 월간/연간 에너지 요구량, 연간 단위면적당 1차에너지소요량(kWh/㎡·y), 연간 CO₂ 배출량 등 |

> *ECO2는 월별 기상 데이터를 기반으로 에너지 요구량과 소요량을 산출하며, 사용자 친화적 GUI 환경을 제공합니다.*

---



## 세부 입력 정보 페이지 바로가기

각 세부 항목별 입력 데이터에 대한 정보 페이지입니다:

- [건물 정보 (Building Information)](./01_building_info.md)
- [입력 존 (Input Zone)](./02_input_zone.md)
- [입력 면 (Input Surface)](./03_input_surface.md)
- [공조 처리 시스템 (HVAC Processing)](./04_hvac_processing.md)
- [난방기기 (Heating Equipment)](./05_heating_equip.md)
- [난방공급시스템 (Heating Supply System)](./06_heating_supply.md)
- [난방분배시스템 (Heating Distribution System)](./07_heating_distribution.md)
- [냉방기기 (Cooling Equipment)](./08_cooling_equip.md)
- [냉방분배시스템 (Cooling Distribution System)](./09_cooling_distribution.md)
- [신재생 및 열병합 (Renewable & CHP)](./10_renewable_chp.md)
- [열관류율 (Thermal Transmittance)](./11_thermal_transmittance.md)
- [월별 에너지 사용량 (Monthly Energy Use)](./12_monthly_energy_use.md)

---

> 
