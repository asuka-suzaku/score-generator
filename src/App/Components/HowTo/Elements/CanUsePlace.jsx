import { HOW_TO_TITLE, USE_HOW_TO_STYLE } from "./HowToUseSheet";

export default function CanUsePlace() {
  return (
    <>
      <USE_HOW_TO_STYLE>
        <HOW_TO_TITLE>
          <h2>生成された画像が使用できる場所</h2>
          <p>WHERE IT CAN BE USED</p>
        </HOW_TO_TITLE>
        <div>
          <p>
            使用画像やフォントなどの著作権等権利がない場合にはどこでも使用できます。
            <br />
            もし使用画像やフォントの著作権などの権利等、その他権利がある場合には、使用画像先、使用フォント先の権利に従ってください。
          </p>
        </div>
      </USE_HOW_TO_STYLE>
    </>
  );
}
