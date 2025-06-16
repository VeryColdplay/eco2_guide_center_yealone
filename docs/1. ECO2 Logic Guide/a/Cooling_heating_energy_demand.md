# 냉방 및 난방 에너지요구량

어떤 존의 온도가 **설정 범위 내**에 있다면 추가적으로 냉방 또는 난방을 할 필요가 없을 것입니다.   
그러나 설정 범위를 벗어난다면, 다음과 같이 **냉방** 또는 **난방 에너지요구량**이 발생하게 됩니다.  
<br>
```mermaid
graph TD
    classDef pretendard font-family:'Pretendard';

    A{현재 온도는 설정 범위 안에 있는가}
    A -- 예 --> B[냉난방 필요 없음]
    A -- 아니오 --> C{현재 온도가 높은가}
    C -- 예 --> D[냉방 에너지요구량 발생]
    C -- 아니오 --> E[난방 에너지요구량 발생]

    class A pretendard
    class B pretendard
    class C pretendard
    class D pretendard
    class E pretendard
```
<br>


## 1. 냉방 에너지요구량  \(Q_{c,b}\) (Cooling energy demand) 
### 🔹 건축물의 냉방 에너지요구량 계산
설정 범위보다 온도가 **높을 때** 냉방 에너지요구량이 발생합니다.   
즉 어떤 존의 냉방 에너지요구량, \(Q_{c,b}\)은 시스템에 의해 **제거되어야 할 유효 열량**을 계산함으로써 구해집니다.  
<br>
\(Q_{c,b}\) 는 다음과 같이 계산됩니다:  

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
 \( Q_{c,b} = (1-\eta) Q_{source} \quad \text{(2–1)} \)
  </div>
</div>

<!-- ✅ Where 이하: 완전히 별도의 블록으로 분리 -->
<div style="
  display: flex;
  justify-content: center;
  font-family: Pretendard, sans-serif;
  font-size: 15px;
  margin-top: 0px;
">
  <div style="
    text-align: left;
    line-height: 2;
    padding: 16px 24px;
    border-radius: 0px;
  ">
    <!-- Where 텍스트: 독립적, 굵고 이탤릭 -->
    <div style="
      font-style: italic;
      font-weight: bold;
      font-family: 'Times New Roman', 'Cambria Math', serif;
      margin-bottom: 24px;
    ">
      Where,
    </div>

    <!-- 수식 설명들: 왼쪽 정렬, Pretendard 유지 -->
    <span style="display: block;">\( Q_{c,b} \) : \(Zone\ i\)의 냉방 에너지요구량 </span>
    <span style="display: block;">\( \eta_i \) : 열획득 이용률</span>
    <span style="display: block;">\( Q_{source,i} \) : \(Zone\ i\)의 열획득</span>
  </div>
</div>

<br>

- 어떤 존(zone) \(i\)의 **연간** 냉방에너지요구량을 구하기 위해, 월별로 **월간**🗓️ 냉방 에너지요구량을 구하고 이를 합산합니다. 
<span style="font-size: 0.8em; font-style: italic;">[&nbsp;&nbsp;&nbsp;&nbsp;🔍 건물의 조닝(zoning)에 대한 로직 바로가기](../a/Zoning.md)</span>
- **월간** 냉방 에너지요구량은 **일간** 냉방 에너지요구량의 한달치 계산이 됩니다.
- 연중 월간 열획득 및 이용률 값이 모두 다르므로, 월별 냉방 에너지요구량 값은 모두 상이합니다. 
<span style="font-size: 0.8em; font-style: italic;">[&nbsp;&nbsp;&nbsp;&nbsp;🔍 열획득과 열손실에 대한 로직 바로가기](../a/Heat_gain_loss.md)</span>
<span style="font-size: 0.8em; font-style: italic;">[&nbsp;&nbsp;&nbsp;&nbsp;🔍 (이용률 등) 개별 값 설정에 대한 로직 바로가기](../a/Value.md)</span>

&nbsp;<br>

---

### 🔹 건축물의 **연간** 냉방 에너지요구량: 🗓️ 월별 요구량의 합
#### 🔘 연간 냉방 에너지요구량 \(Q_{c,b}\) = \( \sum \) 월간 냉방 에너지요구량</h4>
<figure style="text-align: center;">
  <img src="../../_images/adjusted_left_box_width_c.png" style="max-width: 60%;" alt="Annual & monthly cooling energy demand">
  <figcaption><strong>Annual cooling energy demand</strong></figcaption>
</figure>


&nbsp;<br>

---

### 🔹 **월간** 냉방에너지요구량 \(Q_{c,b}\)
#### 🔘 월간 냉방 에너지요구량 \(Q_{c,b, mth}\) = \( \sum \) 일간 냉방 에너지요구량</h4>

\(Q_{c,b, mth}\)는 다음과 같이 계산됩니다:      

<div style="text-align: center; margin-top: 24px; margin-bottom: 8px;">
  <div style="
    display: inline-block;
    background-color: #F1F5F9;
    border-radius: 10px;
    padding: 16px 48px;
    line-height: 1.8;
    margin-top: 1em;
    margin-bottom: 0px;
  ">
    {{ include_equations("2", 7, 7) }}
  </div>
</div>

<!-- ✅ Where 이하: 완전히 별도의 블록으로 분리 -->
<div style="
  display: flex;
  justify-content: center;
  font-family: Pretendard, sans-serif;
  font-size: 15px;
  margin-top: 0px;
">
  <div style="
    text-align: left;
    line-height: 2;
    padding: 16px 24px;
    border-radius: 0px;
  ">
    <!-- Where 텍스트: 독립적, 굵고 이탤릭 -->
    <div style="
      font-style: italic;
      font-weight: bold;
      font-family: 'Times New Roman', 'Cambria Math', serif;
      margin-bottom: 24px;
    ">
      Where,
    </div>

    <!-- 수식 설명들: 왼쪽 정렬, Pretendard 유지 -->
    <span style="display: block;">\( Q_{c,b,mth} \) : 월간 냉방 에너지요구량</span>
    <span style="display: block;">\( d_{op} \) : 주중 일수</span>
    <span style="display: block;">\( \eta_op \) : 주중 열획득 이용률</span>
    <span style="display: block;">\( Q_{source,op} \) : 주중 열획득</span>
    <span style="display: block;">\( d_{we} \) : 주말 일수</span>
    <span style="display: block;">\( \eta_we \) : 주말 열획득 이용률</span>  
    <span style="display: block;">\( Q_{source,we} \) : 주말 열획득</span>
  </div>
</div>

<br>

- 1개월은 **주중** 및 **주말**로 구성됩니다.   
- 주중 및 주말 여부에 따라 운영스케줄이 다르기 때문에 **일간** 냉방 에너지요구량 또한 달라집니다. 

<figure style="text-align: center;">
  <img src="../../_images/Monthly cooling energy demand.png" style="max-width: 70%;" alt="Monthly & daily cooling energy demand">
  <figcaption><strong>Monthly cooling energy demand</strong></figcaption>
</figure>





## 난방 에너지요구량  \(Q_{h,b}\) (Heating energy demand) 
### 🔹 건축물의 난방 에너지요구량 계산

설정 범위보다 온도가 **낮을 때** 난방 에너지요구량이 발생합니다. 즉 어떤 존의 난방 에너지요구량, \(Q_{h,b}\)은 시스템에 의해 **보충되어야 할 유효 열량**을 계산함으로써 구해집니다.  
<br>
\(Q_{h,b}\) 는 다음과 같이 계산됩니다:  

<div style="text-align: center; margin-top: 24px; margin-bottom: 8px;">
  <div style="
    display: inline-block;
    background-color: #F1F5F9;
    border-radius: 10px;
    padding: 16px 48px;
    line-height: 1.8;
    margin-top: 1em;
    margin-bottom: 0px;
  ">
    {{ include_equations("2", 1, 1) }}
  </div>
</div>

<!-- ✅ Where 이하: 완전히 별도의 블록으로 분리 -->
<div style="
  display: flex;
  justify-content: center;
  font-family: Pretendard, sans-serif;
  font-size: 15px;
  margin-top: 0px;
">
  <div style="
    text-align: left;
    line-height: 2;
    padding: 16px 24px;
    border-radius: 0px;
  ">
    <!-- Where 텍스트: 독립적, 굵고 이탤릭 -->
    <div style="
      font-style: italic;
      font-weight: bold;
      font-family: 'Times New Roman', 'Cambria Math', serif;
      margin-bottom: 24px;
    ">
      Where,
    </div>

    <!-- 수식 설명들: 왼쪽 정렬, Pretendard 유지 -->
    <span style="display: block;">\( Q_{h,b,i} \) : \(Zone\ i\)의 난방 에너지요구량</span>
    <span style="display: block;">\( Q_{sink,i} \) : \(Zone\ i\)의 열손실</span>
    <span style="display: block;">\( \eta_i \) : 열획득 이용률</span>
    <span style="display: block;">\( Q_{source,i} \) : \(Zone\ i\)의 열획득</span>
  </div>
</div>

- 어떤 존(zone) \(i\)의 **연간** 난방에너지요구량을 구하기 위해, 월별로 **월간**🗓️ 난방 에너지요구량을 구하고 이를 합산합니다. 
<span style="font-size: 0.8em; font-style: italic;">[&nbsp;&nbsp;&nbsp;&nbsp;🔍 건물의 조닝(zoning)에 대한 로직 바로가기](../a/Zoning.md)</span>
- **월간** 난방 에너지요구량은 **일간** 난방 에너지요구량의 한달치 계산이 됩니다.
- 연중 월간 열획득 및 이용률 값이 모두 다르므로, 월별 난방 에너지요구량 값은 모두 상이합니다. 
<span style="font-size: 0.8em; font-style: italic;">[&nbsp;&nbsp;&nbsp;&nbsp;🔍 열획득과 열손실에 대한 로직 바로가기](../a/Heat_gain_loss.md)</span>
<span style="font-size: 0.8em; font-style: italic;">[&nbsp;&nbsp;&nbsp;&nbsp;🔍 (이용률 등) 개별 값 설정에 대한 로직 바로가기](../a/Value.md)</span>


&nbsp;<br>

---

### 🔹 건축물의 **연간** 난방 에너지요구량: 🗓️ 월별 요구량의 합
#### 🔘 연간 난방 에너지요구량 \(Q_{h,b}\) = \( \sum \) 월간 난방 에너지요구량</h4>
<figure style="text-align: center;">
  <img src="../../_images/adjusted_left_box_width_c.png" style="max-width: 60%;" alt="Annual & monthly cooling energy demand">
  <figcaption><strong>Annual cooling energy demand</strong></figcaption>
</figure>


&nbsp;<br>

---

### 🔹 **월간** 난방에너지요구량 \(Q_(h,b)\)
#### 🔘 월간 난방 에너지요구량 \(Q_{h,b, mth}\) = \( \sum \) 일간 난방 에너지요구량</h4>

\(Q_{h,b, mth}\)는 다음과 같이 계산됩니다:      

<div style="text-align: center; margin-top: 24px; margin-bottom: 8px;">
  <div style="
    display: inline-block;
    background-color: #F1F5F9;
    border-radius: 10px;
    padding: 16px 48px;
    line-height: 1.8;
    margin-top: 1em;
    margin-bottom: 0px;
  ">
    {{ include_equations("2", 6, 6) }}
  </div>
</div>

<!-- ✅ Where 이하: 완전히 별도의 블록으로 분리 -->
<div style="
  display: flex;
  justify-content: center;
  font-family: Pretendard, sans-serif;
  font-size: 15px;
  margin-top: 0px;
">
  <div style="
    text-align: left;
    line-height: 2;
    padding: 16px 24px;
    border-radius: 0px;
  ">
    <!-- Where 텍스트: 독립적, 굵고 이탤릭 -->
    <div style="
      font-style: italic;
      font-weight: bold;
      font-family: 'Times New Roman', 'Cambria Math', serif;
      margin-bottom: 24px;
    ">
      Where,
    </div>

    <!-- 수식 설명들: 왼쪽 정렬, Pretendard 유지 -->
    <span style="display: block;">\( Q_{h,b,mth} \) : 월간 난방 에너지요구량</span>
    <span style="display: block;">\( d_{op} \) : 주중 일수</span>
    <span style="display: block;">\( \eta_op \) : 주중 열획득 이용률</span>
    <span style="display: block;">\( Q_{source,op} \) : 주중 열획득</span>
    <span style="display: block;">\( d_{we} \) : 주말 일수</span>
    <span style="display: block;">\( \eta_we \) : 주말 열획득 이용률</span>  
    <span style="display: block;">\( Q_{source,we} \) : 주말 열획득</span>
  </div>
</div>

<br>

- 1개월은 **주중** 및 **주말**로 구성됩니다.   
- 주중 및 주말 여부에 따라 운영스케줄이 다르기 때문에 **일간** 난방 에너지요구량 또한 달라집니다. 

<figure style="text-align: center;">
  <img src="../../_images/Monthly cooling energy demand.png" style="max-width: 70%;" alt="Monthly & daily cooling energy demand">
  <figcaption><strong>Monthly cooling energy demand</strong></figcaption>
</figure>
