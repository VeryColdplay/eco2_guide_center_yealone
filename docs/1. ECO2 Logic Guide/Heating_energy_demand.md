# 단위면적당 난방에너지요구량  \(Q_{h,b}\) (Heating energy demand, per area) 

<div div style="
  background-color: #F1F5F9;
  border-left: 5px solid rgb(147, 160, 238);
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 16px;
">
        <strong>개요</strong><br>
        단위면적당 난방에너지요구량은 <strong>시스템이 제거해야 할 유효 열량</strong>으로, 다음 식에 의해 계산됩니다:
        {{ include_equations("2", 1, 1) }}
        <h5> To 희: 난방으로 위 식 교체 요청드립니다</h5>
</div>

## 🔹단위면적당 난방에너지요구량 계산을 위한 📐공간 및 🗓️시간 구분
- 한 건축물의 연간 단위면적당 난방에너지요구량을 구하기 위해, 건축물을 공간적 및 시간적으로 분할하여 각 단위면적당 난방에너지요구량을 계산합니다.   
- 📐 공간은 <strong>존(zone)</strong> 단위로 구분되며 <strong>모든 존별 단위면적당 난방에너지요구량의 합</strong>이 비로소 건축물의 단위면적당 난방에너지요구량이 됩니다. <span style="font-size: 0.9em; font-style: italic;">[&nbsp;&nbsp;&nbsp;&nbsp;🔍 조닝(zoning)에 대한 로직 바로가기](../1.%20ECO2%20Logic%20Guide/Zoning.md)</span>
- 🗓️ 한편 1개 존의 연간 단위면적당 난방에너지요구량은 <strong>월별 단위면적당 난방에너지요구량의 총합</strong>이 됩니다.

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
    <h3> ⭕ 건축물의 연간 단위면적당 난방에에너지요구량: 📐 존별 요구량의 합</h3>
    <h4></h4>
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
    <h3> ⭕ 건축물의 연간 단위면적당 난방에너지요구량: 🗓️ 월별 요구량의 합</h3>
    <h4>연간 단위면적당 난방에너지요구량 \(Q_{h,b}\)</h4>
    <p><center>
  <img src="../../images/adjusted_left_box_width_c.png" style="max-width: 100%;" alt="Annual & monthly cooling energy demand">
  <div><strong>Annual heaing energy demand</strong></div>
</center>
</p>
  </div>
</div>



&nbsp;<br>

## 🔹 **월간** 단위면적당 난방에너지요구량 \(Q_{h,b}\)

&nbsp;<br>

<center>
  <img src="../../images/Monthly cooling energy demand.png" style="max-width: 80%;" alt="Monthly cooling energy demand">
  <div><strong>Monthly cooling energy demand</strong></div>
</center>

<h5> To 희: 난방 버전으로 위 그림 제작 및 교체 요청드립니다</h5>
&nbsp;<br>


1개월은 주중 및 주말일수로 구성되고,  
주중 및 주말 여부에 따라 1일 단위면적당 난방에너지요구량이 달라짐

{{ include_equations("2", 7, 7) }}  
<h5> To 희: 난방으로 위 식 교체 요청드립니다</h5>

where 
<em>Q<sub>source</sub></em> : 열획득원  
&eta;: 열획득 이용률(소진율) 

#### 🚩 열획득 이용률(&eta;): 열획득원(<em>Q<sub>source</sub></em> )에 의한 난방에너지요구량(<em>Q<sub>c, b</sub></em> )의 정도를 결정 
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



##### 열획득 이용률(&eta;) ＝ 1이면 이 존의 난방에너지요구량(<em>Q<sub>h, b</sub></em> ) = 0


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
