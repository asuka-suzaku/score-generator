import styled from "styled-components";
import * as common from "../../Style/Common/Common";

export default function TermOfUse() {
  return (
    <>
      <STYLE id="termOfUseTop">
        <h3 className="rule-title">利用規約</h3>
        <div className="site-rule">
          <div className="site-rule-section">
            <p>
              この利用規約（以下、「本規約」といいます。）は、SCORE
              GENERATOR（以下、「当サイト」といいます。）がこのウェブサイト上で提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下、「ユーザー」といいます。）には、本規約に従って、本サービスをご利用いただきます。
            </p>
          </div>
          <div className="site-rule-section">
            <p className="site-rule-title">第1条（適用）</p>
            <p className="site-rule-content">
              本規約は、ユーザーと当サイトとの間の本サービスの利用に関わる一切の関係に適用されるものとします。
              <br />
              当サイトは本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の定め（以下、「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。
              <br />
              本規約の規定が前条の個別規定の規定と矛盾する場合には、個別規定において特段の定めなき限り、個別規定の規定が優先されるものとします。
            </p>
          </div>
          <div className="site-rule-section">
            <p className="site-rule-title">第2条（同意）</p>
            <p className="site-rule-content">
              第3条、第4条、第5条はgeneratorページ内の「同意する」を押した時点で同意したものとみなします。
              <br />
              その他条項はアクセス時に同意したものとします。
            </p>
          </div>
          <div className="site-rule-section">
            <p className="site-rule-title">第3条（著作権）</p>
            <p className="site-rule-content">
              生成された画像の著作権は当サイトが保持します。
            </p>
          </div>
          <div className="site-rule-section">
            <p className="site-rule-title">第4条（画像の使用場所）</p>
            <p className="site-rule-content">
              このサイトで生成された画像に関しては、法令または公序良俗に違反する行為、
              犯罪行為に関連する行為、当サイトの利用規約に違反しない場合には自由に画像を改変、公表、使用（商用利用も含む）できるものとします。
              <br />
              また、背景画像やフォントの著作権に関してはユーザーが確認するものとし、当サイトは責任はおいません。
            </p>
          </div>
          <div className="site-rule-section">
            <p className="site-rule-title">
              第5条（当サイトで作られた画像の使用について）
            </p>
            <p className="site-rule-content">
              当サイトで作られた画像は、当サイトが作成者の許可なく広告、サイト内で使用できるものとします。
            </p>
          </div>
          <div className="site-rule-section">
            <p className="site-rule-title">第6条（当サイトの責任）</p>
            <p className="site-rule-content">
              当サイトの使用によって損害が出た場合には当サイトの重大な過失または故意がない場合には、当サイトは賠償責任を負わず、一切の請求などをすることが出来ません。
              <br />
              また当サイトに重大な過失、故意がある場合の賠償義務は、現実に生じた損害のみとします。
            </p>
          </div>
          <div className="site-rule-section">
            <p className="site-rule-title">第7条（禁止事項）</p>
            <div className="site-rule-content">
              <p>
                ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
              </p>
              <ul>
                <li>法令または公序良俗に違反する行為 犯罪行為に関連する行為</li>
                <li>
                  本サービスの内容等、本サービスに含まれる著作権、商標権ほか知的財産権を侵害する行為
                </li>
                <li>
                  当サイト、ほかのユーザー、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為
                </li>
                <li>
                  生成画像の「SCORE
                  GENERATOR」を編集等で消すまたは視認できなくする行為
                </li>
                <li> 当サイトのサービスの運営を妨害するおそれのある行為</li>
                <li>不正アクセスをし、またはこれを試みる行為</li>
                <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                <li>不正な目的を持って本サービスを利用する行為</li>
                <li>
                  本サービスの他のユーザーまたはその他の第三者に不利益、損害、不快感を与える行為
                </li>
                <li>他のユーザーに成りすます行為</li>
                <li>
                  当サイトが許諾しない本サービス上での宣伝、広告、勧誘、または営業行為
                </li>
                <li> 面識のない異性との出会いを目的とした行為</li>
                <li>
                  当サイトのサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為
                </li>
                <li>その他、当サイトが不適切と判断する行為</li>
              </ul>
            </div>
          </div>
          <div className="site-rule-section">
            <p className="site-rule-title">第8条（本サービスの提供の停止等）</p>
            <div className="site-rule-content">
              <p>
                当サイトは、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
              </p>
              <ul>
                <li>
                  本サービスにかかるコンピュータシステムの保守点検または更新を行う場合
                </li>
                <li>
                  地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合
                </li>
                <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                <li>その他、当サイトが本サービスの提供が困難と判断した場合</li>
              </ul>
              <p>
                当サイトは、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。
              </p>
            </div>
          </div>
          <div className="site-rule-section">
            <p className="site-rule-title">第9条（利用制限）</p>
            <p className="site-rule-content">
              当サイトは、ユーザーが以下のいずれかに該当する場合には、事前の通知なく、ユーザーに対して、本サービスの全部もしくは一部の利用を制限することができるものとします。
              本規約のいずれかの条項に違反した場合
              違反した際の当サイトからの連絡に対し、一定期間返答がない場合
              その他、当サイトが本サービスの利用を適当でないと判断した場合
              当サイトは、本条に基づき当サイトが行った行為によりユーザーに生じた損害について、一切の責任を負いません。
            </p>
          </div>
          <div className="site-rule-section">
            <p className="site-rule-title">第10条（サービス内容の変更等）</p>
            <p className="site-rule-content">
              当サイトは、ユーザーへの事前の告知をもって、本サービスの内容を変更、追加または廃止することがあり、ユーザーはこれを承諾するものとします。
            </p>
          </div>
          <div className="site-rule-section">
            <p className="site-rule-title"> 第11条（利用規約の変更）</p>
            <p className="site-rule-content">
              当サイトは以下の場合には、ユーザーの個別の同意を要せず、本規約を変更することができるものとします。
              本規約の変更がユーザーの一般の利益に適合するとき。
              本規約の変更が本サービス利用契約の目的に反せず、かつ、変更の必要性、変更後の内容の相当性その他の変更に係る事情に照らして合理的なものであるとき。
              当サイトはユーザーに対し、前項による本規約の変更にあたり、事前に、本規約を変更する旨及び変更後の本規約の内容並びにその効力発生時期を通知します。
            </p>
          </div>
          <div className="site-rule-section">
            <p className="site-rule-title">第12条（個人情報の取扱い）</p>
            <p className="site-rule-content">
              当サイトは個人情報を収集していないため、特段の規定はございません。
            </p>
          </div>
          <div className="site-rule-section">
            <p className="site-rule-title">第13条（通知または連絡）</p>
            <p className="site-rule-content">
              ユーザーと当サイトとの間の通知または連絡は、当サイトの定める方法によって行うものとします。当サイトは、X:@suzaku_asukaのポストすることによりユーザーへ到達したものとみなします。
            </p>
          </div>
          <div className="site-rule-section">
            <p className="site-rule-title">第14条（権利義務の譲渡の禁止</p>
            <p className="site-rule-content">
              ユーザーは、当サイトの書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。
            </p>
          </div>
          <div className="site-rule-section">
            <p className="site-rule-title">第15条（準拠法・裁判管轄）</p>
            <p className="site-rule-content">
              本規約の解釈にあたっては、日本法を準拠法とします。
              本サービスに関して紛争が生じた場合には、当サイトの本店所在地を管轄する裁判所を専属的合意管轄とします。
            </p>
          </div>
          <p className="last">以上</p>
        </div>
      </STYLE>
    </>
  );
}

const STYLE = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .site-rule-section {
    margin: 5em 1em;
  }
  .rule-title {
    font-weight: 600;
    width: fit-content;
    font-weight: 600;
    white-space: nowrap;
    font-size: ${common.MAIN_FONT_SIZE * 1.1}px;
    background-color: ${common.SUB_COLOR};
    padding: 1em 5em;
    border-radius: 3em;
  }
  .site-rule-title {
    font-weight: 600;
    width: fit-content;
    font-weight: 600;
    /* white-space: nowrap; */
    font-size: ${common.MAIN_FONT_SIZE * 1.1}px;
    background-color: ${common.SUB_COLOR};
    padding: 1em 3em;
    border-radius: 3em;
  }

  ul {
    position: relative;
    left: 1em;
    margin: 1em 0;
  }

  .site-rule-content {
    margin-top: 2em;
    font-size: ${common.MAIN_FONT_SIZE}px;
  }

  .last {
    display: flex;
    justify-content: end;
    margin-right: 1em;
  }

  @media screen and (max-width: 800px) {
    .rule-title {
      font-size: ${common.MAIN_FONT_SIZE}px;
      font-weight: 700;
      padding: 1em 5em;
      border-radius: 3em;
    }
    .site-rule-title {
      font-size: ${common.MAIN_FONT_SIZE}px;
      font-weight: 700;
    }

    .site-rule-content {
      font-size: ${common.MAIN_FONT_SIZE * 0.9}px;
    }
  }

  @media screen and (max-width: 500px) {
    .site-rule-section {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
