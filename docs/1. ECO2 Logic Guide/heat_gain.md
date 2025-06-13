# 열손실 및 열획득 (Heat Loss and Heat Gain)

존의 열손실/열획득은 서로 대차 대조된 후, 난방부하 또는 냉방부하가 계산됩니다. 다음과 같은 열손실 및 열획득이 부하 분석 시 고려됩니다:

- 관류에 의한 열손실/열획득
- 환기에 의한 열손실/열획득 (침기, 창문환기, 이웃 존과의 환기)
- 존의 부하와 무관하게 온도 처리된 급기에 의한 열손실/열획득
- 투명한 창호를 통한 태양열 획득
- 불투명한 벽체의 외피에서 태양열흡수와 열방사에 의한 열손실/열획득
- 전자기기, 인공조명, 인체발열(사람, 동물), 건물 존으로 온기나 냉기를 가진 물건 유입/반출, 존 내부에 열/냉열 배관이 지나가 발생하는 내부 열손실/열획득

## 열손실

전도와 자연환기에 의한 열손실, 기계환기에 의한 냉열유입, 존 내부의 냉열원 그리고 복사손실에 의한 존의 총 열손실이 결정됩니다. 

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
### 전도 열손실

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
    <h3 style="margin-top: 0;"><strong>전도 열손실</strong></h3>
    전도 열손실은 벽체, 지붕, 바닥 등 외피를 통해 발생하는 열의 손실을 의미합니다.  
    아래 수식은 전체 전도 손실을 계산하는 식입니다.

    $$ Q_T = \sum_j H_{T,j} \cdot (\vartheta_i - \vartheta_j)t,\quad \vartheta_i > \vartheta_j $$

    <div style="margin-top: 10px;">
      {{ include_equations("2", 6, 6) }}
    </div>

    <strong>희에게 적절한 다이어그램 혹은 그림 추가 요청</strong>
      <center>
       <img src="./heat_gain_fig1.png" alt="Heat Gain" style="max-width: 80%;">
       <div><strong></strong></div>
      </center>
      %% https://images.app.goo.gl/CRTJpWiKihadMg7t5
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
    <details>
      <summary><strong>외기에 의한 벽체를 통한 전도</strong></summary>
      $$ Q_{T,e} = H_{T,D} (\vartheta_i - \vartheta_e)t $$
    </details>
    <details>
      <strong>열관류율 합산 (외기)</strong>
      $$ H_{T,D} = \sum(U_j A_j) + \Delta U_{WB} \sum A_j $$
      $$ \Delta U_{WB}: \text{외단열 } 0.1, \quad \text{내단열 } 0.15 $$
    </details>
    <details>
      <summary><strong>비난방존의 벽체를 통한 전도</strong></summary>
      $$ Q_{T,u} = H_{T,iu} (\vartheta_i - \vartheta_u)t $$
    </details>
    <details>
      <strong>열관류율 합산 (비난방존)</strong>
      $$ H_{T,iu} = \sum(U_j A_j) $$
    </details>
    <details>
      <summary><strong>이웃 난방/냉방 존의 벽체를 통한 전도</strong></summary>
      $$ Q_{T,z} = H_{T,iz} (\vartheta_i - \vartheta_z)t $$
    </details>
    <details>
      <strong>열관류율 합산 (이웃 존)</strong>
      $$ H_{T,iz} = \sum(U_j A_j) $$
    </details>
    <details>
      <summary><strong>땅으로의 전도</strong></summary>
      $$ Q_{T,s} = H_{T,s} (\vartheta_i - \vartheta_e)t $$
    </details>
    <details>
      <strong>열관류율 (지면)</strong>
      $$ H_{T,s}: \text{DIN EN ISO 13370 에 따라 산정} $$
    </details>

  </div>

</div>

---
### 환기에 의한 열손실
<div style="display: flex; gap: 2em; align-items: stretch;">

  <!-- 왼쪽 단: 메인 환기 열손실 설명 -->
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
    <h3 style="margin-top: 0;"><strong>환기에 의한 열손실</strong></h3>
    환기에 의한 열손실은 자연 침기, 창 개방, 기계 환기, 인접 공간을 통한 공기 흐름으로 인해 발생하는 에너지 손실입니다.
      $$ Q_V = \sum_k H_{V,k} (\vartheta_i - \vartheta_k)t,\quad \vartheta_i > \vartheta_k $$
    <div style="margin-top: 10px;">
      {{ include_equations("2", 11, 11) }}
    </div>
    <strong>희에게 적절한 다이어그램 혹은 그림 추가 요청</strong>
     <center>
       <img src="./heat_gain_fig2.jpg" alt="Heat Gain2" style="max-width: 80%;">
       <div><strong></strong></div>
      </center>
    %% https://images.app.goo.gl/5EgpPD6C4xHu9z4y9
  </div>

  <!-- 오른쪽 단: 환기 항목별 세부 폴딩 설명 -->
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
    <details>
      <summary><strong>외기 침기에 의한 열손실</strong></summary>
      $$ Q_{V,inf} = H_{V,inf} (\vartheta_i - \vartheta_e)t,\quad \vartheta_i > \vartheta_e  $$
    </details>
    <details>
      <p><strong>실내온도 설정 식</strong></p>
      $$\vartheta_i = \vartheta_{i,h} \; \text{oder} \; \vartheta_{i,c} \quad \text{(난방 또는 냉방 분석–실내온도)}$$
      $$\vartheta_{i,h} = \vartheta_{i,h,soll} \quad \text{기본 21°C}$$
      <p><strong>야간감소 및 주말감소 (난방 시)</strong></p>
      $$\vartheta_{i,h} = \vartheta_{i,h,soll} - f_{tb} (\vartheta_{i,h,soll} - \vartheta_e)$$
      $$\vartheta_{i} = \vartheta_{i,NA} - f_{tb} (\vartheta_{i,NA} - \vartheta_e)$$
      <p><strong>공간적 제한 및 시각적 제한</strong></p>
      $$\vartheta_{i,h} = \vartheta_{i,h,soll} - f_{tb} (\vartheta_{i,h,soll} - \vartheta_e)$$
      $$\vartheta_{i} = \vartheta_{i,NA} - f_{tb} (\vartheta_{i,NA} - \vartheta_e)$$
      <p><strong>냉방 시 실내온도</strong></p>
      $$\vartheta_{i,c} = \vartheta_{i,c,soll} - 2K \quad \text{24°C - 2K = 22°C}$$
    </details>
    <details>
      <summary><strong>창문환기에 의한 열손실</strong></summary>
      $$ Q_{V,win} = H_{V,win} (\vartheta_i - \vartheta_e)t,\quad \vartheta_i > \vartheta_e $$
    </details>
    <details>
      <summary><strong>기계환기에 의한 냉열유입</strong></summary>
      $$ Q_{V,mech} = H_{V,mech} (\vartheta_i - \vartheta_{V,mech})t,\quad \vartheta_i > \vartheta_{V,mech} $$
    </details>
    <details>
      <p><strong>기계환기 조건</strong></p>
      $$\vartheta_{V,mech} = \vartheta_e \quad \text{공조처리 없는 경우}$$
      $$\vartheta_{V,mech} = \vartheta_e + \eta_{V,mech} \cdot (\vartheta_i - \vartheta_e) \quad \text{비제어적 열교환}$$
      $$\vartheta_{V,mech} = \vartheta_{V,mech,RLT} \quad \text{공조처리된 급기온도}$$
    </details>
    <details>
      <summary><strong>다른 존으로부터 유입된 공기에 의한 열손실</strong></summary>
      $$ Q_{V,z} = H_{V,z} (\vartheta_i - \vartheta_z)t,\quad \vartheta_i > \vartheta_z $$
    </details>
  </div>
</div>

