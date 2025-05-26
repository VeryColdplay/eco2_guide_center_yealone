# Cooling Energy Demand (냉방에너지요구량)

## ECO2 memo
절대 온도 구간 기반 부하 판단
기준 범위(Dead band)가 있다면, 그 범위 내에서는 부하가 존재하지 않음 (사람이 쾌적하게 느끼는 실내 온도 범위)
부하라는 것은 에너지요구량을 의미하므로 에너지 단위를 가짐 (기본단위는 W, 와트)

부하의 3종류
1. 기준 범위보다 온도가 낮을 때: 난방부하(heating demand) 발생 🔥 \(Q_{h,b} > 0\)   
2. 기준 범위보다 온도가 높을 떄: 냉방부하(cooling demand) 발생 🧊 \(Q_{c,b} > 0\)   
3. 기준 범위 내 온도: 없음   

## 🔹 Introduction
공간은 1개 존 단위,  
시간은 1개월 단위로 단위면적당 냉방에너지요구량을 계산 << 도식화 예정

### 1개 존의 1개월 단위면적당 냉방에너지요구량 (<em>Q<sub>c, b</sub></em> )

1개월은 주중 및 주말일수로 구성되고,  
주중 및 주말 여부에 따라 1일 단위면적당 냉방에너지요구량이 달라짐

🎨 Request to Hee ➡️ 적절히 도식화 요청

{{ include_equations("2", 1, 1) }}

주중 1일 단위면적당 냉방에너지요구량 × 주중 일수  
주말 1일 단위면적당 냉방에너지요구량 × 주말 일수
▶ 1개월 단위면적당 냉방에너지요구량 
1일(i?) 기준 1개 존 단위면적당 냉방에너지요구량 (<em>Q<sub>c, b</sub></em> )

{{ include_equations("2", 7, 7) }}  

where 
<em>Q<sub>source</sub></em> : 열획득원  
&eta;: 열획득 이용률(소진율) 

#### 🚩 열획득 이용률(&eta;): 열획득원(<em>Q<sub>source</sub></em> )에 의한 냉방에너지요구량(<em>Q<sub>c, b</sub></em> )의 정도를 결정 
&gamma; 및 <em>a </em>의 값에 따라 열획득 이용률(&eta;)이 결정  

{{ include_equations("2", 23, 24) }}  


<details open>
  <summary><strong> 두 단 전체 열고 닫기</strong></summary>

  <div style="display: flex; gap: 2em; margin-top: 1em;">
    <!-- 왼쪽 단 -->
    <div style="flex: 1;">
      <h4>🔹 왼쪽 단</h4>
      <p>왼쪽 단의 내용입니다.</p>
    </div>

    <!-- 오른쪽 단 -->
    <div style="flex: 1;">
      <h4>🔸 오른쪽 단</h4>
      <p>오른쪽 단의 내용입니다.</p>
    </div>
  </div>

</details>


{{ include_equations("2", 138, 138) }}  

<details>
  <summary style="font-weight: bold; font-size: 1.1em;">▼ 수식 설명 보기</summary>
  <div style="display: flex; gap: 2em; margin-top: 1em;">
    <div style="flex: 1;">
      <h3>왼쪽 단</h3>
      <p>이곳은 왼쪽 단의 내용입니다. 예: 수식에 사용된 변수 설명</p>
    </div>
    <div style="flex: 1;">
      <h3>오른쪽 단</h3>
      <p>이곳은 오른쪽 단의 내용입니다. 예: 실제 적용 사례나 계산 예시</p>
    </div>
  </div>
</details>



##### 열획득 이용률(&eta;) ＝ 1이면 이 존의 냉방에너지요구량(<em>Q<sub>c, b</sub></em> ) = 0


<h3>표 3.1.2-13 제주 기상데이터</h3>

<table border="1">
  <thead>
    <tr>
      <th rowspan="3">월</th>
      <th rowspan="3">평균 외기온도<br>[°C]</th>
      <th colspan="10">평균 전일사량 [W/m²]</th>
    </tr>
    <tr>
      <th rowspan="2">수평면</th>
      <th colspan="9">수직면</th>
    </tr>
    <tr>
      <th>남</th>
      <th>남동</th>
      <th>남서</th>
      <th>동</th>
      <th>서</th>
      <th>북동</th>
      <th>북서</th>
      <th>북</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1월</td><td>6.3</td><td>64.0</td><td>78.8</td><td>85.5</td><td>48.4</td><td>63.1</td><td>32.1</td><td>33.5</td><td>26.9</td><td>26.8</td></tr>
    <tr><td>2월</td><td>6.7</td><td>94.6</td><td>102.7</td><td>131.6</td><td>55.2</td><td>108.8</td><td>40.2</td><td>55.3</td><td>34.6</td><td>34.2</td></tr>
    <tr><td>3월</td><td>8.9</td><td>133.3</td><td>104.6</td><td>95.2</td><td>98.3</td><td>78.7</td><td>81.7</td><td>57.0</td><td>58.2</td><td>49.2</td></tr>
    <tr><td>4월</td><td>14.0</td><td>188.6</td><td>105.1</td><td>109.8</td><td>113.0</td><td>102.1</td><td>104.5</td><td>77.6</td><td>78.0</td><td>57.5</td></tr>
    <tr><td>5월</td><td>17.8</td><td>199.5</td><td>95.7</td><td>105.8</td><td>109.4</td><td>108.2</td><td>112.3</td><td>94.6</td><td>96.7</td><td>78.9</td></tr>
    <tr><td>6월</td><td>21.5</td><td>194.0</td><td>81.3</td><td>98.2</td><td>101.0</td><td>107.0</td><td>110.8</td><td>95.7</td><td>98.3</td><td>77.7</td></tr>
    <tr><td>7월</td><td>25.9</td><td>198.0</td><td>86.4</td><td>106.6</td><td>101.2</td><td>115.4</td><td>107.2</td><td>99.9</td><td>93.6</td><td>76.4</td></tr>
    <tr><td>8월</td><td>26.9</td><td>181.2</td><td>87.6</td><td>141.8</td><td>81.8</td><td>167.1</td><td>78.6</td><td>135.0</td><td>69.9</td><td>74.4</td></tr>
    <tr><td>9월</td><td>23.0</td><td>156.8</td><td>109.6</td><td>101.0</td><td>114.7</td><td>87.0</td><td>101.9</td><td>64.2</td><td>71.5</td><td>53.0</td></tr>
    <tr><td>10월</td><td>18.2</td><td>132.5</td><td>119.9</td><td>99.8</td><td>109.2</td><td>74.8</td><td>83.0</td><td>53.7</td><td>55.8</td><td>49.5</td></tr>
    <tr><td>11월</td><td>13.2</td><td>94.2</td><td>119.9</td><td>112.5</td><td>80.2</td><td>71.4</td><td>45.3</td><td>34.9</td><td>30.1</td><td>29.6</td></tr>
    <tr><td>12월</td><td>8.1</td><td>64.6</td><td>83.0</td><td>86.9</td><td>51.0</td><td>60.8</td><td>32.3</td><td>31.7</td><td>27.2</td><td>27.1</td></tr>
  </tbody>
</table>



##### 열획득 이용률(&eta;) ≠ 1


<div style="display: flex; gap: 2em;">

  <!-- 왼쪽 단 -->
  <div style="flex: 1;">
    <details open>
      <summary><strong>🔹 왼쪽 단 제목</strong></summary>
      <p>여기는 왼쪽 단 내용입니다.</p>
      <p>원한다면 수식도 가능: \( Q = mc\Delta T \)</p>
    </details>
  </div>

  <!-- 오른쪽 단 -->
  <div style="flex: 1;">
    <details>
      <summary><strong>🔸 오른쪽 단 제목</strong></summary>
      <p>여기는 오른쪽 단 내용입니다.</p>
      <ul>
        <li>항목 1</li>
        <li>항목 2</li>
      </ul>
    </details>
  </div>

</div>




<div style="border: 1px solid red; padding: 1em;">
This is raw HTML in Markdown.
</div>

<div style="display: flex; gap: 2em;">
  <div style="flex: 1;">
    <h3>왼쪽 단</h3>
    <p>이곳은 왼쪽 단의 내용입니다.</p>
  </div>
  <div style="flex: 1;">
    <h3>오른쪽 단</h3>
    <p>이곳은 오른쪽 단의 내용입니다.</p>
  </div>
</div>


<details open>
<summary><strong>🔹 단 1: 입력 조건</strong></summary>

여기에 첫 번째 단의 내용을 씁니다.  
예: 외기온도, 실내 목표온도, 난방/냉방 조건 등...

</details>

<details>
<summary><strong>🔸 단 2: 계산식 및 결과</strong></summary>

여기는 두 번째 단입니다.  
$$ Q_{cooling} = (1 - \eta) \cdot Q_{source} $$

</details>



<center>
  <img src="../../images/fig1.jpg" width="600" alt="Energy Flow Diagram">
  <div><strong>Figure 1. Energy Flow Diagram</strong></div>
</center>

---

## 🔹 냉방기기 설정 항목 및 계산 로직

### **1. [일반데이터]**
- **냉동기 방식** → 압축식 / 흡수식 선택
- **냉동기 총 용량 (kW)** → 냉방 부하 계산 시 필수 값
- **정격열성능지수 (COP)** → 냉동기 효율을 평가하는 지표

**🔹 계산식:**
```python
COP = Q_output / W_input
```

---

### **2. [신재생 및 열병합 시스템 연결여부]**
- **신재생 시스템 연결 여부** → 시스템 연결 여부 선택
- **연결된 시스템** → 지열 냉난방, 태양열 시스템 등 선택
- **적용된 입력존 수** → 시스템 적용 범위 지정

**🔹 신재생 시스템 반영 시 부하 보정식:**
```python
Q_total = Q_cooling - Q_renewable
```

---

### **3. [압축식 냉동기]**
- **압축식 냉동기 종류** → 공기 간격식, 수냉식 등 선택
- **냉동기 압축방식** → 왕복동식, 스크류 압축기 등 선택
- **제어방식** → On/Off 제어, PID 제어 등 선택

**🔹 냉방 부하 계산:**
```python
Q_cooling = Q_sensible + Q_latent
```
- \( Q_{sensible} \) : 현열 부하 (온도 조절)
- \( Q_{latent} \) : 잠열 부하 (습도 조절)

---

### **4. [흡수식 냉동기]**
- **열원과 연결 방식** → 외부 보일러 등 열원 선택
- **사용 연료** → 도시가스, 전기, 증기 등 선택
- **냉동기 종류** → 단효용, 이중효용 등 효율에 따라 구분

**🔹 흡수식 냉동기 열원 계산:**
```python
Q_absorption = Q_cooling / 효율
```

---

### **5. [재냉각기 (냉각탑)]**
- **종말식 또는 건식냉각기** → 냉각 방식 선택 (없음, 공기냉각 등)
- **냉각탑의 보조냉각기 유무** → 부가적으로 설치된 냉각기 여부

**🔹 냉각탑 열 방출 계산:**
```python
Q_tower = m_dot * Cp * (T_in - T_out)
```
- \( m_dot \) : 냉각수 유량
- \( C_p \) : 물의 비열 (4.18 kJ/kg·K)
- \( T_{in}, T_{out} \) : 냉각탑 입/출구 온도

---

## 🔹 Key Formula
The core equation for heat energy calculation is:

$$
Q = mc\Delta T
$$

Where:  
- **Q** = Heat energy (Joules)  
- **m** = Mass (kg)  
- **c** = Specific heat capacity (J/kg·K)  
- **ΔT** = Temperature change (K)

---

## 🔹 Example Calculation
Let's calculate the energy required to heat 2 kg of water from 20°C to 80°C. Assuming water's specific heat capacity is \( 4.18 \ \mathrm{J/g \cdot K} \).  

$$
Q = (2 \times 1000) \times 4.18 \times (80 - 20) = 502,000 \ \text{J}
$$
