# 월별 분석방식 (Monthly method)
월별 분석방식의 일반사항:   

- 분석경계 및 계산 시간
- 열획득 및 열손실
- 존의 냉방 및 난방 에너지요구량
- 개별 값 설정   

에 대해 설명합니다.

## 월별 분석방식의 분석경계 및 계산 시간
### 분석경계
ECO2에서의 건물 에너지 분석은 **존**을 단위로 시행된다.   
- 존(Zone): 열의 유출입이 발생하는 경계로 구획 <span style="font-size: 0.9em; font-style: italic;">[&nbsp;&nbsp;&nbsp;&nbsp;🔍 조닝(zoning)에 대한 로직 바로가기](../1.%20ECO2%20Logic%20Guide/Zoning.md)</span>


<br>

### 계산 시간

존에서 발생하는 열획득과 열손실은 **하루**를 단위로 계산한다.   
이에 열획득과 열손실, 그리고 열획득 이용률 값에 의해 결정되는 냉방 및 난방 에너지요구량 또한 **하루**를 단위로 계산된다. 이를 월 단위로 합산한 후 최종적으로 연간 에너지요구량을 도출한다.


<div style="display: flex; gap: 0.5em; align-items: stretch;">
    <div style="
    flex: 1;
    background: #f0f8ff;
    border: 1px solid #aad4ff;
    border-radius: 8px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  ">
    <h4> 🔹 건축물의 연간 단위면적당 냉방에너지요구량: 📐 존별 요구량의 합</h4>
    <h5></h5>
    <p>이곳은 왼쪽 단의 내용입니다.</p>
  </div>
    <div style="
    flex: 1;
    background: #f0f8ff;
    border: 1px solid #aad4ff;
    border-radius: 8px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  ">
    <h4> 🔹 건축물의 연간 단위면적당 냉방에너지요구량: 🗓️ 월별 요구량의 합</h4>
    <h5>연간 단위면적당 냉방에너지요구량 \(Q_{c,b}\)</h5>
    <p><center>
  <img src="../../images/adjusted_left_box_width_c.png" style="max-width: 80%;" alt="Annual & monthly cooling energy demand">
  <div><strong>Annual cooling energy demand</strong></div>
</center>
</p>
  </div>
</div>
2. 설정 범위보다 온도가 낮을 때: 난방 에너지요구량이 발생 🔥 \(Q_{h,b} > 0\)   


&nbsp;<br>


## 열획득 및 열손실
- **열획득**: 어떤 존에서 **획득**되는 열 
- **열손실**: 어떤 존에서 **손실**되는 열
- 어떤 존에서 열의 획득과 손실은 다양한 방식으로 발생하며, ECO2에서는 다음과 같은 경우를 고려한다:
    - 전도
    - 환기
    - 급기
    - 복사
    - 내부 열원

<figure style="text-align: center;">
  <img src="../../_images/Heat gain or loss.png" style="max-width: 60%;" alt="Annual & monthly cooling energy demand">
  <figcaption><strong>Heat Gain or Loss</strong></figcaption>
</figure>


## 존의 냉방 및 난방 에너지요구량

## 개별 값 설정
유효계수(이용률), 실내온도



### 건물 모델링 세부 페이지 바로가기

건물 모델링에 관한 세부 페이지는 다음과 같습니다:

- [건물의 조닝 (Zoning of a Building)](./Zoning.md)
- [냉방 및 난방 에너지요구량 (Cooling & Heating Energy Demand)](./Cooling_heating_energy_demand.md)
- [열획득과 열손실 (Heat Gain & Heat Loss)](./Heat_gain_loss.md)
- [개별 값 설정 (Values Setting)](./Value.md)

---