# ECO2 가이드센터에 오신 것을 환영합니다
에너지 성능이 높은 건축물 보급을 확대하고 효과적인 에너지 관리를 유도하기 위해 건축물의 에너지 성능에 대한 정량적이고 객관적인 정보를 제공하고자 2009년 12월 국토교통부와 산업통상자원부가 공동으로 '건축물 에너지 효율등급 인증규정'을 고시하였습니다. 이에 건축물 에너지효율등급 인증에 관한 규칙 및 인증기준을 제·개정하였으며, 건축물 에너지 성능 계산 및 평가를 위해 시뮬레이션 도구 ECO2가 사용됩니다.  

ECO2 가이드센터는 다음에 대한 세부 가이드를 제공합니다:   

- [ECO2 Logic Guide](1. ECO2 Logic Guide/index.html)
- [ECO2 User Guide](2. ECO2 User Guide/index.html)
- [ECO2 Assessment Guide](3. ECO2 Assessment Guide/index.html)
- [Reference](4. Reference/index.html)
<br>
---
본 페이지에서는 건축물 에너지효율등급 인증제도와 함께 에너지효율등급을 평가하는 ECO2를 간략히 소개합니다. 

## 건축물 에너지효율등급 인증제도

### 인증 대상
- 자발적 신청: 단독주택, 공동주택, 기숙사, 업무시설 등 **신축/기존 모든 용도 건축물**
- **의무 대상 (공공기관 발주 건축물)**
  > 공동주택 → **2등급 이상**  
  > 업무용 건축물 → **1등급 이상** 

### 인증 방식

난방, 냉방, 급탕, 조명, 환기에 대한 에너지소요량을 전반적으로 계산하고 이를 바닥면적으로 나눈 값, 즉 **단위면적당 1차에너지소요량(Primary Energy Use per m²)** 기준, 에너지 성능에 따라 **10개 등급(1+++ ~ 7)**으로 평가합니다. 평가를 위한 분석 툴은 **ECO2 프로그램**을 사용합니다.

<center>
  <img src="/docs/_images/table_2.1.1_1.png" style="max-width: 80%;" alt="table_2.1.1_1.png">
  <div><strong>Figure. 건축물 에너지 효율 등급 인증기준 </strong></div>
</center>

> ※ 냉방설비가 없는 주거용 건축물(단독주택 및 기숙사를 제외한 공동주택)의 경우 냉방 평가 항목 제외  
> ※ 단위면적당 1차에너지소요량 = 단위면적당 에너지소요량 $\times$ 1차에너지환산계수  


<div div style="
  background-color: #f0f8ff;
  border-left: 5px solid #2b6777;
  padding: 10px 20px;
  margin-top: 20px;
">
    <strong>건축물 에너지효율등급 인증등급</strong>
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
</div>

> ※ 주거용 건축물: 단독주택 및 공동주택(기숙사 제외)
> ※ 기준 초과 시 "등외" 처리
> ※ 기준에는 용도별 보정계수 적용됨


---

## ECO2 프로그램 개요
### 프로그램 목적 및 개발 배경

ECO2는 건축물의 에너지 효율등급 인증을 위한 시뮬레이션 도구로, 건축물의 설계단계에서 에너지 성능을 정량적으로 평가하기 위해 개발되었습니다. 이 프로그램은 건축물의 난방, 냉방, 급탕, 조명, 환기 등을 고려한 단위면적당 1차 에너지 소요량을 계산하여, 등급 인증 평가를 수행합니다.

- 2009년 국토교통부와 산업통상자원부가 고시한 **‘건축물 에너지 효율등급 인증규정’**에 근거하여 개발됨.
- 국제표준인 ISO 13790와 DIN V 18599를 기반으로 하는 알고리즘 적용함.
- **월간 평균기상자료(Monthly Calculation Method)**를 이용한 정상상태 시뮬레이션 방식임.

### 주요 기능 및 계산 항목

| 항목             | 설명                                             |
| -------------- | ---------------------------------------------- |
| **기후 데이터**     | 국내 13개 지역의 월별 평균 기상데이터 사용                      |
| **에너지 항목**     | 난방, 냉방, 급탕, 조명, 환기의 5대 시스템 평가                 |
| **평가 값**       | 단위면적당 연간 1차 에너지소요량 (kWh/㎡·y)                   |
| **입력 정보**      | 건물 형상, 외피, 창호, HVAC 시스템, 재실자 설정, 신·재생에너지 시스템 등 |
| **신·재생에너지 종류** | 지열, 태양광, 태양열, 열병합발전 등 선택 가능                    |
| **산출 결과**      | 월별/연간 에너지요구량, 소요량, CO₂ 배출량, 신재생에너지 생산량 등       |

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




