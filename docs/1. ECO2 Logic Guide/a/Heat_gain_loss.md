# 열손실 및 열획득 (Heat Loss and Heat Gain)

<center>
  <img src="../../_images/Cooling_heating_energy_demand.png" style="max-width: 50%;" alt="Cooling and Heating Energy Demand">
  <div><strong>Figure. Cooling & Heating Energy Demand</strong></div>
</center>

존의 열손실/열획득은 서로 대차 대조된 후, 난방부하 또는 냉방부하가 계산됩니다. 다음과 같은 열손실 및 열획득이 부하 분석 시 고려됩니다:

- 관류에 의한 열손실/열획득
- 환기에 의한 열손실/열획득 (침기, 창문환기, 이웃 존과의 환기)
- 존의 부하와 무관하게 온도 처리된 급기에 의한 열손실/열획득
- 투명한 창호를 통한 태양열 획득
- 불투명한 벽체의 외피에서 태양열흡수와 열방사에 의한 열손실/열획득
- 전자기기, 인공조명, 인체발열(사람, 동물), 건물 존으로 온기나 냉기를 가진 물건 유입/반출, 존 내부에 열/냉열 배관이 지나가 발생하는 내부 열손실/열획득

## 열손실 \(Q_{sink}\)과 열획득 \(Q_{source}\)

전도와 자연환기에 의한 열 획득 및 손실, 기계환기에 의한 냉열유입, 존 내부의 냉열원, 태양열입사 그리고 복사손실에 의한 존의 전체 열손실 및 열획득이 결정됩니다. 
<center>
  <img src="../../_images/Heat_gain_or_loss.png" alt="Heat Gain or Loss" style="max-width: 80%;">
  <div><strong>Heat Gain or Loss Diagram</strong></div>
</center>
<!-- 참고 이미지: https://www.slideshare.net/slideshow/climo-heat-losspptx/251519576  -->


열손실 \(Q_{sink}\) 과 열획득 \(Q_{source}\) 계산식은 다음과 같습니다:

<div style="text-align: center; margin-top: 24px; margin-bottom: 8px;">
  <div style="
    display: inline-block;
    background-color: #F1F5F9;
    border-radius: 10px;
    padding: 16px 48px;
    line-height: 1.8;
    margin-top: 1em;
    margin-bottom: 2em;
  ">
  {{ include_equations("2", 11, 11) }}
  {{ include_equations("2", 16, 16) }}
  </div>
</div>

---
### 전도에 의한 열손실 및 열획득 \(Q_{T}\)

<div style="
  display: flex;
  margin-top: 20px;
  gap: 20px;
">
  <!-- 왼쪽 열 -->
  <div style="
    flex: 1;
    background-color:rgb(255, 255, 255); 
    border-left: 5px solid #2b6777;
    padding: 10px 20px;
  ">
    <strong>전도 열손실/열획득</strong><br>

    전도에 의한 열손실과 열획득은 벽체, 지붕, 바닥 등 외피를 통해 발생하는 열의 손실과 획득을 의미합니다. <br>
    
    아래 수식은 전체 전도 손실 및 획득을 계산하는 식입니다:<br>
    <br>

    <strong>열손실</strong> {{ include_equations("2", 12, 12) }}
    <strong>열획득</strong> {{ include_equations("2", 18, 18) }}


   <center>
    <img src="../../_images/heat_gain_fig1.png" alt="Heat Gain" style="max-width: 80%;">
    <div><strong>Heat Gain Figure 1</strong></div>
   </center>

  <!-- 참고 이미지: https://images.app.goo.gl/CRTJpWiKihadMg7t5 -->
  </div>

  <!-- 오른쪽 단: 세부 전도 항목 (간격 축소 + 수식 렌더링) -->
  <div style="
    flex: 1;
    background-color: #f0f8ff;
    border-left: 5px solid #2b6777;
    padding: 10px 20px;
  ">
    <details open>
      <summary><strong>외기에 의한 벽체를 통한 전도</strong></summary>
      <strong>열손실</strong>{{ include_equations("2", 42, 42) }}
      <strong>열획득</strong>{{ include_equations("2", 43, 43) }}
      <div style="
          background-color:#eaf2f5;
          padding: 12px 16px;
          margin-top: 10px;
          margin-bottom: 10px;
          border-radius: 6px;
          font-size: 14px;
          line-height: 1.5;
        ">
      <strong>열관류율 합산</strong>
      {{ include_equations("2", 44, 44) }}
      </div>
    </details>
    <details open>
      <summary><strong>비난방존의 벽체를 통한 전도</strong></summary>
      <strong>열손실</strong>
      {{ include_equations("2", 46, 46) }}
      <strong>열획득</strong>
      {{ include_equations("2", 47, 47) }}
      <div style="
          background-color:#eaf2f5;
          padding: 12px 16px;
          margin-top: 10px;
          margin-bottom: 10px;
          border-radius: 6px;
          font-size: 14px;
          line-height: 1.5;
        ">
      <strong>열관류율 합산</strong>
      {{ include_equations("2", 48, 48) }}
      </div>
    </details>
    <details open>
      <summary><strong>이웃 난방/냉방 존의 벽체를 통한 전도</strong></summary>
      <strong>열손실</strong>{{ include_equations("2", 50, 50) }}
      <strong>열획득</strong>{{ include_equations("2", 51, 51) }}
      <div style="
          background-color:#eaf2f5;
          padding: 12px 16px;
          margin-top: 10px;
          margin-bottom: 10px;
          border-radius: 6px;
          font-size: 14px;
          line-height: 1.5;
        ">
      <strong>열관류율 합산</strong>
      {{ include_equations("2", 52, 52) }}
      </div>
    </details>
    <details open>
      <summary><strong>땅으로의 전도</strong></summary>
      <strong>열손실</strong>{{ include_equations("2", 53, 53) }}
      <strong>열획득</strong>{{ include_equations("2", 54, 54) }}
      <div style="
          background-color:#eaf2f5;
          padding: 12px 16px;
          margin-top: 10px;
          margin-bottom: 10px;
          border-radius: 6px;
          font-size: 14px;
          line-height: 1.5;
        ">
      <strong>열관류율 (지면)</strong>
      $$ H_{T,s}: \text{DIN EN ISO 13370 에 따라 산정} $$
      </div>
    </details>
  </div>
</div>

---
### 환기에 의한 열손실 및 열획득 \(Q_{V}\)

<div style="
  display: flex;
  margin-top: 20px;
  gap: 20px;
">
  <!-- 왼쪽 열 -->
  <div style="
    flex: 1;
    background-color:rgb(255, 255, 255); 
    border-left: 5px solid #2b6777;
    padding: 10px 20px;
  ">
    <strong>환기 열손실/열획득</strong><br>

    환기에 의한 열손실 및 열획득은 자연 침기, 창 개방, 기계 환기, 인접 공간을 통한 공기 흐름으로 인해 발생하는 에너지 손실 및 획득입니다. <br>
    
    아래 수식은 전체 환기 손실 및 획득을 계산하는 식입니다:<br>
    <br>

    <strong>열손실</strong> {{ include_equations("2", 13, 13) }}
    <strong>열획득</strong> {{ include_equations("2", 19, 19) }}

     <center>
      <img src="../../_images/heat_gain_fig2.jpg" alt="Heat Gain2" style="max-width: 80%;">
      <div><strong>Heat Gain Figure 2</strong></div>
     </center>

  </div>

  <!-- 오른쪽 열 -->
  <div style="
    flex: 1;
    background-color: #f0f8ff;
    border-left: 5px solid #2b6777;
    padding: 10px 20px;
  ">
    <details open>
      <summary><strong>외기 침기</strong></summary>
      <strong>열손실</strong>{{ include_equations("2", 56, 56) }}
      <strong>열획득</strong>{{ include_equations("2", 57, 57) }}
        <div style="
          background-color:#eaf2f5;
          padding: 12px 16px;
          margin-top: 10px;
          margin-bottom: 10px;
          border-radius: 6px;
          font-size: 14px;
          line-height: 1.5;
        "> 
        {{ include_equations("2", 58, 58) }}
        <strong>실내온도 설정 식</strong>
        $$
        \vartheta_i = \vartheta_{i,h} \ \text{oder} \ \vartheta_{i,c} \quad \text{(난방 또는 냉방 분석 – 실내온도)}
        $$
        <strong>야간감소 및 주말감소 (난방 시)</strong>
        {{ include_equations("2", 26, 26) }}
        {{ include_equations("2", 30, 30) }}
        <strong>공간적 제한 및 시각적 제한</strong>
        {{ include_equations("2", 33, 33) }}
        {{ include_equations("2", 35, 35) }}
        <strong>냉방 시 실내온도</strong>
        {{ include_equations("2", 36, 36) }}
        </div>
    </details>
    <details open>
      <summary><strong>창문환기</strong></summary>
      <strong>열손실</strong>{{ include_equations("2", 64, 64) }}
      <strong>열획득</strong>{{ include_equations("2", 65, 65) }}
    </details>
    <details open>
      <summary><strong>기계환기</strong></summary>
      <strong>열손실</strong>{{ include_equations("2", 81, 81) }}
      <strong>열획득</strong>{{ include_equations("2", 82, 82) }}
      <div style="
          background-color:#eaf2f5;
          padding: 12px 16px;
          margin-top: 10px;
          margin-bottom: 10px;
          border-radius: 6px;
          font-size: 14px;
          line-height: 1.5;
        ">
      <strong>기계환기 조건</strong>
      {{ include_equations("2", 90, 90) }}
      {{ include_equations("2", 91, 91) }}
      {{ include_equations("2", 92, 92) }}
      </div>
    </details>
    <details open>
      <summary><strong>다른 존으로부터 유입된 공기</strong></summary>
      <strong>열손실</strong>{{ include_equations("2", 97, 97) }}
      <strong>열획득</strong>{{ include_equations("2", 98, 98) }}
    </details>

  </div>
</div>

---

### 내부 열손실 \(Q_{I, sink}\) 및 내부 발열 획득 \(Q_{I, source}\)

<div style="
  display: flex;
  margin-top: 20px;
  gap: 20px;
">
  <!-- 왼쪽 열 -->
  <div style="
    flex: 1;
    background-color:rgb(255, 255, 255); 
    border-left: 5px solid #2b6777;
    padding: 10px 20px;
  ">
    <strong>내부 열손실/내부 발열 획득</strong><br>

    분석 존을 통과하는 냉매/냉수 분배관, 차가운 공기가 지나가는 덕트 또는 기기 (ex. 냉열이 생산되는 냉장 진열대, 빙쇄기 등), 규칙적으로 존으로 유입되는 차가운 물질 또는 물건 (ex. 생산에서의 물품)으로 인해 내부 열손실이 발생합니다.<br>
    
    내부 발열 획득은 사람, 동물, 기기, 인공조명 등에서 발열되는 열과 존 내부에 설치되는 난방분배배관, 온수배관, 덕트, 축열탱크, 보일러, 냉동기, 규칙적으로 존으로 유입되는 고온의 물체로부터 획득되는 열을 고려합니다.<br>
    
    아래 수식은 내부 열손실 및 내부 발열 획득을 계산하는 식입니다:<br>
    <br>

    <strong>내부 열손실</strong> {{ include_equations("2", 15, 15) }}
    <strong>내부 발열 획득</strong> {{ include_equations("2", 20, 20) }}

    <strong> To. 희, 적절한 다이어그램 추가 필요해요!! </strong>
     

  </div>

  <!-- 오른쪽 열 -->
  <div style="
    flex: 1;
    background-color: #f0f8ff;
    border-left: 5px solid #2b6777;
    padding: 10px 20px;
  ">
    <details open>
      <summary><strong>내부 열손실</strong></summary>
      <strong>난방,냉방, 급탕 및 공조시스템에 의한 비제어적 열손실원</strong>
      {{ include_equations("2", 125, 125) }}
      <strong>기기에 의한 열손실원</strong>
      {{ include_equations("2", 120, 120) }}
      <strong>물품이나 재료반입에 의한 열손실원</strong>
      {{ include_equations("2", 122, 122) }}
    </details>
    <details open>
      <summary><strong>내부 발열 획득</strong></summary>
      <strong>인체에 의한 열획득원</strong>
      {{ include_equations("2", 118, 118) }}
      <strong>기기에 의한 열획득원</strong>
      {{ include_equations("2", 119, 119) }}
      <strong>인공조명에 의한 열획득원</strong>
      {{ include_equations("2", 123, 123) }}
      <strong>난방,냉방, 급탕 및 공조시스템에 의한 비제어적 열획득원</strong>
      {{ include_equations("2", 124, 124) }}
    </details>
  </div>
</div>

---

### 복사 열손실 및 태양열에 의한 열획득 \(Q_{S}\)

<div style="
  display: flex;
  margin-top: 20px;
  gap: 20px;
">
  <!-- 왼쪽 열 -->
  <div style="
    flex: 1;
    background-color:rgb(255, 255, 255); 
    border-left: 5px solid #2b6777;
    padding: 10px 20px;
  ">
    <strong>복사 열손실/태양열에 의한 열획득</strong><br>

    열손실의 경우, 불투명한 표면에 입사된 태양열은 장파장 복사에 의해 손실 차감되기 때문에 입사 태양열보다 복사에 의한 방사가 크면 열손실이 발생합니다.<br>
    
    열획득의 경우, 투명한 창을 통해 직접 존으로 유입되거나 불투명한 외벽에 흡수되어 전도에 의해 존으로 유입되는 열을 고려합니다.<br>
    
    아래 수식은 복사 열손실 및 태양열에 의한 열획득을 계산하는 식입니다:<br>
    <br>

    <strong>복사 열손실</strong> {{ include_equations("2", 111, 111) }}
    <strong>태양열에 의한 열획득</strong> {{ include_equations("2", 17, 17) }}

    <strong> To. 희, 적절한 다이어그램 추가 필요해요!! </strong>
     

  </div>

  <!-- 오른쪽 열 -->
  <div style="
    flex: 1;
    background-color: #f0f8ff;
    border-left: 5px solid #2b6777;
    padding: 10px 20px;
  ">
    <details open>
      <summary><strong>불투명 구조체를 통한 태양열 유입</strong></summary>
      {{ include_equations("2", 111, 111) }}
      {{ include_equations("2", 112, 112) }}
      <details>
      <summary>표면 흡수율 \(\alpha\)</summary>
      <!DOCTYPE html>
      <html lang="ko">
      <head>
        <meta charset="UTF-8">
        <title>표면 흡수율</title>
        <style>
          table {
            border-collapse: collapse;
            width: 60%;
            font-family: "Malgun Gothic", sans-serif;
            font-size: 14px;
          }
          th, td {
            border: 1px solid black;
            padding: 6px;
            text-align: left;
          }
          th {
            background-color: #f9f9f9;
            text-align: center;
          }
          td.value {
            text-align: center;
          }
        </style>
      </head>
      <body>
        <table>
        <caption style="caption-side: top; text-align: left; font-size: 16px; font-weight: bold; margin-bottom: 12px;">
          표 3.2.4-6. 표면 흡수율
        </caption>
          <tr>
            <th>표면</th>
            <th>흡수율 α</th>
          </tr>
          <tr>
            <td>벽표면<br>– 밝은 칠<br>– 중간 칠<br>– 어두운 칠</td>
            <td class="value"><br>0.4<br>0.6<br>0.8</td>
          </tr>
          <tr>
            <td>경질벽돌 벽</td>
            <td class="value">0.8</td>
          </tr>
          <tr>
            <td>밝은 층 벽</td>
            <td class="value">0.6</td>
          </tr>
          <tr>
            <td>지붕<br>– 붉은벽돌<br>– 어두운 표면<br>– 금속(광택)<br>– 콜타르 지붕층(모래가 첨부된)</td>
            <td class="value"><br>0.6<br>0.8<br>0.2<br>0.6</td>
          </tr>
        </table>
      </body>
      </html>
      </details>
    </details>
    <details open>
      <summary><strong>투명체를 통한 태양입사광에 의한 열획득</strong></summary>
      {{ include_equations("2", 105, 105) }}
      <div style="
          background-color:#eaf2f5; 
          padding: 12px 16px;
          margin-top: 10px;
          margin-bottom: 10px;
          border-radius: 6px;
          font-size: 14px;
          line-height: 1.5;
        ">
      <strong>차양 및 음영을 고려한 총에너지 투과율</strong>
      {{ include_equations("2", 106, 106) }}
      {{ include_equations("2", 107, 107) }}
      {{ include_equations("2", 108, 108) }}
      {{ include_equations("2", 109, 109) }}
      </div>
      <details>
      <summary>창유리 및 자양장치에 대한 표준값</summary>
      <!DOCTYPE html>
      <html lang="ko">
      <head>
        <meta charset="UTF-8">
        <title>창유리 형식별 차양장치 영향</title>
        <style>
          table {
            border-collapse: collapse;
            width: 100%;
            font-size: 13px;
            font-family: "Malgun Gothic", sans-serif;
          }
          th, td {
            border: 1px solid black;
            padding: 4px;
            text-align: center;
          }
          th {
            background-color: #f8f8f8;
          }
        </style>
      </head>
      <body>
        <table>
        <caption style="caption-side: top; text-align: left; font-size: 16px; font-weight: bold; margin-bottom: 12px;">
          표 3.2.4-5. 창유리 및 자양장치에 대한 표준값
        </caption>
          <tr>
            <th rowspan="4">창유리 형식</th>
            <th rowspan="3"; th colspan="4">차양장치 없음</th>
            <th colspan="6">외부 차양장치</th>
            <th colspan="7">내부 차양장치</th>
          </tr>
          <tr>
            <th colspan="2">외부 블라인드 설정각 10°</th>
            <th colspan="2">외부 블라인드 설정각 45°</th>
            <th colspan="2">버티칼</th>
            <th colspan="2">내부 블라인드 설정각 10°</th>
            <th colspan="2">내부 블라인드 설정각 45°</th>
            <th colspan="2">텍스틸 롤러</th>
            <th colspan="1">폴리</th>
          </tr>
          <tr>
            <th colspan="1">흰색</th>
            <th colspan="1">진회색</th>
            <th colspan="1">흰색</th>
            <th colspan="1">진회색</th>
            <th colspan="1">흰색</th>
            <th colspan="1">회색</th>
            <th colspan="1">흰색</th>
            <th colspan="1">밝은 회색</th>
            <th colspan="1">흰색</th>
            <th colspan="1">밝은 회색</th>
            <th colspan="1">흰색</th>
            <th colspan="1">밝은 회색</th>
            <th colspan="1">흰색</th>
          </tr>
          <tr>
            <th>U<sub>g</sub></th><th>g<sub>⊥</sub></th><th>τ<sub>e</sub></th><th>τ<sub>D65</sub></th>
            <th>g<sub>tot</sub></th><th>g<sub>tot</sub></th>
            <th>g<sub>tot</sub></th><th>g<sub>tot</sub></th>
            <th>g<sub>tot</sub></th><th>g<sub>tot</sub></th>
            <th>g<sub>tot</sub></th><th>g<sub>tot</sub></th>
            <th>g<sub>tot</sub></th><th>g<sub>tot</sub></th>
            <th>g<sub>tot</sub></th><th>g<sub>tot</sub></th>
            <th>g<sub>tot</sub></th>
          </tr>
          <tr>
            <td>단층</td><td>5.8</td><td>0.87</td><td>0.85</td><td>0.9</td>
            <td>0.07</td><td>0.13</td><td>0.15</td><td>0.14</td><td>0.22</td><td>0.18</td>
            <td>0.3</td><td>0.4</td><td>0.38</td><td>0.46</td><td>0.25</td><td>0.52</td><td>0.26</td>
          </tr>
          <tr>
            <td>복층</td><td>2.9</td><td>0.78</td><td>0.73</td><td>0.82</td>
            <td>0.06</td><td>0.1</td><td>0.12</td><td>0.1</td><td>0.2</td><td>0.14</td>
            <td>0.34</td><td>0.43</td><td>0.4</td><td>0.47</td><td>0.29</td><td>0.51</td><td>0.3</td>
          </tr>
          <tr>
          <td>삼층</td><td>2.0</td><td>0.7</td><td>0.63</td><td>0.75</td>
          <td>0.05</td><td>0.07</td><td>0.11</td><td>0.08</td><td>0.18</td><td>0.11</td>
          <td>0.35</td><td>0.43</td><td>0.4</td><td>0.47</td><td>0.31</td><td>0.5</td><td>0.32</td>
          </tr>
          <tr>
          <td>복층 진공유리</td><td>1.7</td><td>0.72</td><td>0.6</td><td>0.74</td>
          <td>0.05</td><td>0.07</td><td>0.11</td><td>0.07</td><td>0.18</td><td>0.11</td>
          <td>0.35</td><td>0.44</td><td>0.41</td><td>0.48</td><td>0.3</td><td>0.51</td><td>0.32</td>
          </tr>
          <tr>
          <td>복층 진공유리</td><td>1.4</td><td>0.67</td><td>0.58</td><td>0.78</td>
          <td>0.04</td><td>0.06</td><td>0.1</td><td>0.06</td><td>0.17</td><td>0.1</td>
          <td>0.35</td><td>0.43</td><td>0.4</td><td>0.47</td><td>0.31</td><td>0.49</td><td>0.32</td>
          </tr>
          <tr>
          <td>복층 진공유리</td><td>1.2</td><td>0.65</td><td>0.54</td><td>0.78</td>
          <td>0.04</td><td>0.05</td><td>0.1</td><td>0.06</td><td>0.16</td><td>0.09</td>
          <td>0.35</td><td>0.43</td><td>0.4</td><td>0.46</td><td>0.31</td><td>0.48</td><td>0.32</td>
          </tr>
          <tr>
          <td>복층 진공유리</td><td>0.8</td><td>0.5</td><td>0.39</td><td>0.69</td>
          <td>0.03</td><td>0.04</td><td>0.07</td><td>0.04</td><td>0.13</td><td>0.07</td>
          <td>0.32</td><td>0.37</td><td>0.35</td><td>0.39</td><td>0.3</td><td>0.4</td><td>0.31</td>
          </tr>
          <tr>
          <td>삼층 진공유리</td><td>0.6</td><td>0.5</td><td>0.39</td><td>0.69</td>
          <td>0.03</td><td>0.03</td><td>0.07</td><td>0.03</td><td>0.12</td><td>0.06</td>
          <td>0.33</td><td>0.37</td><td>0.36</td><td>0.39</td><td>0.3</td><td>0.4</td><td>0.31</td>
          </tr>
          <tr>
          <td>복층 차양유리</td><td>1.3</td><td>0.48</td><td>0.44</td><td>0.59</td>
          <td>0.02</td><td>0.06</td><td>0.06</td><td>0.02</td><td>0.11</td><td>0.05</td>
          <td>0.32</td><td>0.37</td><td>0.35</td><td>0.39</td><td>0.3</td><td>0.39</td><td>0.31</td>
          </tr>
          <tr>
          <td>복층 차양유리</td><td>1.2</td><td>0.37</td><td>0.34</td><td>0.67</td>
          <td>0.03</td><td>0.05</td><td>0.07</td><td>0.05</td><td>0.11</td><td>0.07</td>
          <td>0.27</td><td>0.29</td><td>0.29</td><td>0.3</td><td>0.26</td><td>0.31</td><td>0.26</td>
          </tr>
          <tr>
          <td>복층 차양유리</td><td>1.2</td><td>0.25</td><td>0.21</td><td>0.4</td>
          <td>0.03</td><td>0.05</td><td>0.06</td><td>0.05</td><td>0.09</td><td>0.07</td>
          <td>0.2</td><td>0.21</td><td>0.21</td><td>0.22</td><td>0.2</td><td>0.22</td><td>0.2</td>
          </tr>
        </table>
      </body>
      </html>
    </details>

  </div>
</div>