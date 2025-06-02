from pathlib import Path
import os

def define_env(env):
    print("✅ define_env executed")
    """Define all custom Jinja2 macros and filters."""

    # === 필터: 파일 이름 → 수식 태그 변환 (e.g. 2_1 → (2-1))
    @env.filter
    def filename_to_eqtag(url):
        filename = os.path.basename(url)
        name = os.path.splitext(filename)[0]
        return f"({name.replace('_', '-')})"

    # === 매크로: 단일 파일 include
    includes_dir = Path(__file__).resolve().parent / "docs" / "_includes"

    @env.macro
    def include(file_name):
        with open(includes_dir / file_name, "r", encoding="utf-8") as f:
            return f.read()

    # === 매크로: 연속된 파일 자동 include + 수식번호 자동 삽입
    @env.macro
    def include_equations(prefix, start, end):
        result = ""
        for i in range(start, end + 1):
            file_name = f"{prefix}_{i}.md"
            file_path = includes_dir / file_name
            if file_path.exists():
                with open(file_path, "r", encoding="utf-8") as f:
                    content = f.read()
                    eq_tag = f"({prefix}-{i})"
                    content = content.replace("{{ auto_eq_number }}", f'<span class="eq-number">{eq_tag}</span>')
                    result += content + "\n\n"
        return result



    @env.macro
    def info_box(title, content, eq_prefix=None, eq_start=None, eq_end=None):
        eq_block = ""
        if eq_prefix and eq_start and eq_end:
            # include_equations(prefix, start, end) 자동 호출
            eq_block = include_equations(eq_prefix, int(eq_start), int(eq_end))

        return f'''
    <div class="info-box">
    <strong>{title}</strong>
    <p>{content}</p>
    {eq_block}
    </div>
    '''
