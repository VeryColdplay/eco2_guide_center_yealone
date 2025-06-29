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

## 열손실

전도와 자연환기에 의한 열 획득 및 손실, 기계환기에 의한 냉열유입, 존 내부의 냉열원, 태양열입사 그리고 복사손실에 의한 존의 전체 열손실 및 열획득이 결정됩니다. 
<center>
  <img src="../../_images/Heat_gain_or_loss.png" alt="Heat Gain or Loss" style="max-width: 80%;">
  <div><strong>Heat Gain or Loss Diagram</strong></div>
</center>
<!-- 참고 이미지: https://www.slideshare.net/slideshow/climo-heat-losspptx/251519576  -->


<div div style="
  background-color: #f0f8ff;
  border-left: 5px solid #2b6777;
  padding: 10px 20px;
  margin-top: 20px;
">
        <strong>열손실</strong><br>
        열손실 계산식은 다음과 같습니다:
        {{ include_equations("2", 11, 11) }}
</div>

---
### 전도에 의한 열손실 및 열획득

<div style="display: flex; gap: 2em; align-items: stretch;">

  <!-- 왼쪽 단: 설명 -->
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
    <h3 style="margin-top: 0;"><strong>전도 열손실/열획득</strong></h3>
    전도에 의한 열손실과 열획득은 벽체, 지붕, 바닥 등 외피를 통해 발생하는 열의 손실과 획득을 의미합니다. 아래 수식은 전체 전도 손실 및 획득을 계산하는 식입니다:

    열손실: {{ include_equations("2", 12, 12) }}
    열획득: {{ include_equations("2", 18, 18) }}


   <center>
    <img src="../../_images/heat_gain_fig1.png" alt="Heat Gain" style="max-width: 80%;">
    <div><strong>Heat Gain Figure 1</strong></div>
   </center>

  <!-- 참고 이미지: https://images.app.goo.gl/CRTJpWiKihadMg7t5 -->
  </div>

  <!-- 오른쪽 단: 세부 전도 항목 (간격 축소 + 수식 렌더링) -->
  <div style="
    flex: 1;
    background: #fef9f1;
    border: 1px solid #f5d7a6;
    border-radius: 8px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 0.05em;
  ">
    <details open>
      <summary><strong>외기에 의한 벽체를 통한 전도</strong></summary>
      열손실: {{ include_equations("2", 42, 42) }}
      열획득: {{ include_equations("2", 43, 43) }}
      <strong>열관류율 합산</strong>
      {{ include_equations("2", 44, 44) }}
    </details>
    <details open>
      <summary><strong>비난방존의 벽체를 통한 전도</strong></summary>
      열손실: {{ include_equations("2", 46, 46) }}
      열획득: {{ include_equations("2", 47, 47) }}
      <strong>열관류율 합산</strong>
      {{ include_equations("2", 48, 48) }}
    </details>
    <details open>
      <summary><strong>이웃 난방/냉방 존의 벽체를 통한 전도</strong></summary>
      열손실: {{ include_equations("2", 50, 50) }}
      열획득: {{ include_equations("2", 51, 51) }}
      <strong>열관류율 합산</strong>
      {{ include_equations("2", 52, 52) }}
    </details>
    <details open>
      <summary><strong>땅으로의 전도</strong></summary>
      열손실: {{ include_equations("2", 53, 53) }}
      열획득: {{ include_equations("2", 54, 54) }}
      <strong>열관류율 (지면)</strong>
      $$ H_{T,s}: \text{DIN EN ISO 13370 에 따라 산정} $$
    </details>

  </div>

</div>

---

<div style="
  display: flex;
  border-left: 5px solid #2b6777;
  margin-top: 20px;
">
  <!-- 왼쪽 열 -->
  <div style="
    flex: 1;
    background-color:rgb(255, 255, 255); 
    padding: 10px 20px;
    border-right: 1px solid #ccc;
  ">
    <strong>환기에 의한 열손실 및 열획득</strong><br>
    환기에 의한 열손실 및 열획득은 자연 침기, 창 개방, 기계 환기, 인접 공간을 통한 공기 흐름으로 인해 발생하는 에너지 손실 및 획득입니다. 
    {{ include_equations("2", 13, 13) }}
    {{ include_equations("2", 19, 19) }}

     <center>
      <img src="../../_images/heat_gain_fig2.jpg" alt="Heat Gain2" style="max-width: 80%;">
      <div><strong>Heat Gain Figure 2</strong></div>
     </center>

  </div>

  <!-- 오른쪽 열 -->
  <div style="
    flex: 1;
    background-color: #f0f8ff;
    padding: 10px 20px;
  ">
    <details open>
      <summary><strong>외기 침기에 의한 열손실</strong></summary>
      열손실: {{ include_equations("2", 56, 56) }}
      열획득: {{ include_equations("2", 57, 57) }}
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
    </details>
    <details open>
      <summary><strong>창문환기에 의한 열손실</strong></summary>
      열손실: {{ include_equations("2", 64, 64) }}
      열획득: {{ include_equations("2", 65, 65) }}
    </details>
    <details open>
      <summary><strong>기계환기에 의한 냉열유입</strong></summary>
      열손실: {{ include_equations("2", 81, 81) }}
      열획득: {{ include_equations("2", 82, 82) }}
      <strong>기계환기 조건</strong>
      {{ include_equations("2", 90, 90) }}
      {{ include_equations("2", 91, 91) }}
      {{ include_equations("2", 92, 92) }}
    </details>
    <details open>
      <summary><strong>다른 존으로부터 유입된 공기에 의한 열손실</strong></summary>
      열손실: {{ include_equations("2", 97, 97) }}
      열획득: {{ include_equations("2", 98, 98) }}
    </details>

  </div>
</div>

