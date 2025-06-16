import os
import re
import json

# 폴더 및 출력 파일 경로 설정
DOCS_DIR = "docs"
OUTPUT_FILE = os.path.join(DOCS_DIR, "equation_index.json")

# 수식 패턴: {{ include_equations("2", 11, 11) }}
equation_pattern = re.compile(r'\{\{\s*include_equations\(["\'](\d+)["\'],\s*(\d+),\s*(\d+)\)\s*\}\}')

# 제목 패턴: 첫 번째 Markdown 헤더 (e.g., # 제목)
title_pattern = re.compile(r'^\s*#\s+(.*)$', re.MULTILINE)

# 결과 저장용 딕셔너리
equation_index = {}

# 모든 .md 파일 순회
for root, _, files in os.walk(DOCS_DIR):
    for file in files:
        if file.endswith(".md"):
            filepath = os.path.join(root, file)
            rel_path = os.path.relpath(filepath, DOCS_DIR).replace("\\", "/")

            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()

            # 첫 번째 헤더 추출
            title_match = title_pattern.search(content)
            title = title_match.group(1).strip() if title_match else rel_path

            # 수식 추출
            matches = equation_pattern.findall(content)
            for match in matches:
                equation_id = f"{match[0]}-{match[1]}-{match[2]}"
                if equation_id not in equation_index:
                    equation_index[equation_id] = []
                equation_index[equation_id].append({
                    "file": rel_path,
                    "title": title
                })

# JSON 저장
with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
    json.dump(equation_index, f, indent=2, ensure_ascii=False)

print(f"✅ equation_index.json 생성 완료! ({OUTPUT_FILE})")
