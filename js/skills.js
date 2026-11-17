/* Each universe is one skill: several lessons, each with reading and more than one task. */
window.AIMING_SKILLS = {
  yingxiao: {
    title: { zh: "把一件事写清楚", zhHant: "把一件事寫清楚", en: "Write one real thing clearly" },
    lessons: [
      {
        title: { zh: "三句话的顺序", zhHant: "三句話的順序", en: "The order of three sentences" },
        reading: {
          zh: ["选一件你确实接触过的事。一家店、一个工具、一场你帮过忙的活动都可以。不要选你没去过、只能靠想象的牌子。", "三句话顺序固定。第一句：它是什么，句子里要有名字或地点。第二句：谁会用，写一个人，不写「所有人」。第三句：只写一个差别。"],
          zhHant: ["選一件你確實接觸過的事。一家店、一個工具、一場你幫過忙的活動都可以。不要選你沒去過、只能靠想像的牌子。", "三句話順序固定。第一句：它是什麼，句子裡要有名字或地點。第二句：誰會用，寫一個人，不寫「所有人」。第三句：只寫一個差別。"],
          en: ["Pick something you have actually touched: a shop, a tool, or an event you helped with. Skip a brand you only know by imagination.", "The three sentences stay in order. What it is, with a name or a place. Who uses it: one person, not “everyone.” One difference, and only one."],
        },
        tasks: [
          { kind: "write", min: 8, prompt: { zh: "写下第一句。句中要有这家店的名字或街道。", zhHant: "寫下第一句。句中要有這家店的名字或街道。", en: "Write the first sentence. Include the shop’s name or the street." } },
          { kind: "check", answer: 1, prompt: { zh: "第二句该写谁？", zhHant: "第二句該寫誰？", en: "Who belongs in the second sentence?" }, options: [
            { zh: "所有人", zhHant: "所有人", en: "Everyone" },
            { zh: "一个具体的人", zhHant: "一個具體的人", en: "One specific person" },
            { zh: "最好的人群", zhHant: "最好的人群", en: "The best kind of crowd" },
          ] },
          { kind: "write", min: 8, prompt: { zh: "写下第三句，只写一个差别。不要用「最好」。", zhHant: "寫下第三句，只寫一個差別。不要用「最好」。", en: "Write the third sentence. One difference. Do not use “best.”" } },
        ],
      },
      {
        title: { zh: "只问一个问题", zhHant: "只問一個問題", en: "Ask one question" },
        reading: {
          zh: ["把三句话给另一个人看。只问：哪一句你没看懂？不要问好不好。不好回答，也改不动。", "记下两行：你的原句，和对方用自己的话说出来的那一句。你不必改成对方的版本。一次只改一句，才知道是哪一处起了作用。"],
          zhHant: ["把三句話給另一個人看。只問：哪一句你沒看懂？不要問好不好。不好回答，也改不動。", "記下兩行：你的原句，和對方用自己的話說出來的那一句。你不必改成對方的版本。一次只改一句，才知道是哪一處起了作用。"],
          en: ["Show the three sentences to someone. Ask only which sentence they did not understand. Do not ask if it is good.", "Write two lines: yours, and the sentence they said back. You do not have to adopt theirs. Change one sentence, so you know which change worked."],
        },
        tasks: [
          { kind: "check", answer: 0, prompt: { zh: "给别人看的时候，该问什么？", zhHant: "給別人看的時候，該問什麼？", en: "What do you ask when someone reads it?" }, options: [
            { zh: "哪一句没看懂", zhHant: "哪一句沒看懂", en: "Which sentence did you not understand" },
            { zh: "好不好", zhHant: "好不好", en: "Is it good" },
            { zh: "要不要再写十句", zhHant: "要不要再寫十句", en: "Should I write ten more" },
          ] },
          { kind: "write", min: 12, prompt: { zh: "写下你的原句，以及你猜对方会怎么用自己的话复述。", zhHant: "寫下你的原句，以及你猜對方會怎麼用自己的話複述。", en: "Write your sentence, and how you think they would say it back." } },
          { kind: "write", min: 8, prompt: { zh: "只改其中一句。把改后的那句写在这里。", zhHant: "只改其中一句。把改後的那句寫在這裡。", en: "Change only one sentence. Write the revised sentence here." } },
        ],
      },
      {
        title: { zh: "读出声再留", zhHant: "讀出聲再留", en: "Read it aloud, then keep it" },
        reading: {
          zh: ["写完读出声。把「最好」「首选」「高品质」删掉。删完句子还在，就留下。", "如果遮住名字和地点，别人不知道在说哪一家，第一句还没写完。这一项技能到这里才算走完：写、问、再留。"],
          zhHant: ["寫完讀出聲。把「最好」「首選」「高品質」刪掉。刪完句子還在，就留下。", "如果遮住名字和地點，別人不知道在說哪一家，第一句還沒寫完。這一項技能到這裡才算走完：寫、問、再留。"],
          en: ["Read it aloud. Delete “best,” “first choice,” and “premium.” If the sentence still stands, keep it.", "If you cover the name and the place and nobody knows which shop it is, the first sentence is not finished. The skill is the whole path: write, ask, then keep."],
        },
        tasks: [
          { kind: "write", min: 20, prompt: { zh: "把三句连起来，写下读出声之后还愿意留下的版本。", zhHant: "把三句連起來，寫下讀出聲之後還願意留下的版本。", en: "Write the three sentences again, the version you would still keep after reading aloud." } },
          { kind: "check", answer: 0, prompt: { zh: "读出声时优先删掉哪一类？", zhHant: "讀出聲時優先刪掉哪一類？", en: "What do you delete first when you read aloud?" }, options: [
            { zh: "最好、首选、高品质", zhHant: "最好、首選、高品質", en: "Best, first choice, premium" },
            { zh: "店名和街道", zhHant: "店名和街道", en: "The shop name and the street" },
            { zh: "谁会用", zhHant: "誰會用", en: "Who uses it" },
          ] },
          { kind: "write", min: 8, prompt: { zh: "写下你删掉的一个词，以及删掉之后留下的那一句。", zhHant: "寫下你刪掉的一個詞，以及刪掉之後留下的那一句。", en: "Write one word you deleted, and the sentence that remains." } },
        ],
      },
    ],
  },
  renshi: {
    title: { zh: "把协作写明白", zhHant: "把協作寫明白", en: "Make collaboration plain" },
    lessons: [
      {
        title: { zh: "四行纸条", zhHant: "四行紙條", en: "A four-line note" },
        reading: {
          zh: ["拿一件这周真实要发生的小事。写成四行：要做的事；谁来做；做到什么算完成；什么时候看一眼。", "不写性格，不写「积极」「负责」。出现「尽快」「差不多」「跟进一下」，就换成一个时间，或一个看得见的结果。"],
          zhHant: ["拿一件這週真實要發生的小事。寫成四行：要做的事；誰來做；做到什麼算完成；什麼時候看一眼。", "不寫性格，不寫「積極」「負責」。出現「盡快」「差不多」「跟進一下」，就換成一個時間，或一個看得見的結果。"],
          en: ["Take one real thing that has to happen this week. Four lines: the task, who does it, what done looks like, and when you will look.", "Do not describe character. If you wrote “soon” or “follow up,” replace it with a time or a result someone can see."],
        },
        tasks: [
          { kind: "write", min: 8, prompt: { zh: "写下要做的事，和谁来做。两行都要有。", zhHant: "寫下要做的事，和誰來做。兩行都要有。", en: "Write the task, and who does it. Both lines." } },
          { kind: "write", min: 8, prompt: { zh: "写下做到什么算完成，以及你什么时候看一眼。要有一个时间。", zhHant: "寫下做到什麼算完成，以及你什麼時候看一眼。要有一個時間。", en: "Write what done looks like, and when you will look. Include a time." } },
          { kind: "check", answer: 1, prompt: { zh: "四行纸条里不该留下哪个？", zhHant: "四行紙條裡不該留下哪個？", en: "Which does not belong on the note?" }, options: [
            { zh: "周四下午三点", zhHant: "週四下午三點", en: "Thursday at three" },
            { zh: "尽快", zhHant: "盡快", en: "As soon as possible" },
            { zh: "谁来做", zhHant: "誰來做", en: "Who does it" },
          ] },
        ],
      },
      {
        title: { zh: "反馈只说两句", zhHant: "反饋只說兩句", en: "Feedback in two sentences" },
        reading: {
          zh: ["第一句是你看到的事实，带一个数字或一个位置。第二句是你希望改的一点。只说一点。", "不要加「另外」。一次说三件事，对方不知道先动哪一件。"],
          zhHant: ["第一句是你看到的事實，帶一個數字或一個位置。第二句是你希望改的一點。只說一點。", "不要加「另外」。一次說三件事，對方不知道先動哪一件。"],
          en: ["The first sentence is a fact, with a number or a place. The second is the one change you want. Only one.", "Do not add “also.” Three requests at once leave the other person unsure which to move."],
        },
        tasks: [
          { kind: "write", min: 8, prompt: { zh: "写第一句事实。里面要有一个数字或一个位置。", zhHant: "寫第一句事實。裡面要有一個數字或一個位置。", en: "Write the fact. Include a number or a place." } },
          { kind: "write", min: 8, prompt: { zh: "写第二句，只说一个要改的点。", zhHant: "寫第二句，只說一個要改的點。", en: "Write the second sentence. Only one change." } },
          { kind: "check", answer: 2, prompt: { zh: "反馈写到第几句就停？", zhHant: "反饋寫到第幾句就停？", en: "When do you stop?" }, options: [
            { zh: "写到态度", zhHant: "寫到態度", en: "When you reach attitude" },
            { zh: "再加一句另外", zhHant: "再加一句另外", en: "After adding “also”" },
            { zh: "第二句说完就停", zhHant: "第二句說完就停", en: "After the second sentence" },
          ] },
        ],
      },
      {
        title: { zh: "问哪一行还要猜", zhHant: "問哪一行還要猜", en: "Ask which line still needs a guess" },
        reading: {
          zh: ["把四行拿给一起做事的人。只问：哪一行还要猜？不评性格。", "对方指出的那一行，你改成一个看得见的结果。这一项技能是把人和事写到不用猜，不是写一篇评语。"],
          zhHant: ["把四行拿給一起做事的人。只問：哪一行還要猜？不評性格。", "對方指出的那一行，你改成一個看得見的結果。這一項技能是把人和事寫到不用猜，不是寫一篇評語。"],
          en: ["Give the four lines to the person doing the work. Ask only which line still needs a guess. Do not judge character.", "Rewrite that line as a result someone can see. The skill is writing until nobody has to guess, not writing a review of the person."],
        },
        tasks: [
          { kind: "check", answer: 0, prompt: { zh: "拿四行去问的时候，问什么？", zhHant: "拿四行去問的時候，問什麼？", en: "What do you ask about the four lines?" }, options: [
            { zh: "哪一行还要猜", zhHant: "哪一行還要猜", en: "Which line still needs a guess" },
            { zh: "这个人积不积极", zhHant: "這個人積不積極", en: "Whether the person is proactive" },
            { zh: "要不要再写性格", zhHant: "要不要再寫性格", en: "Whether to add a note on character" },
          ] },
          { kind: "write", min: 8, prompt: { zh: "挑四行里最含糊的一行，改成一个看得见的结果。", zhHant: "挑四行裡最含糊的一行，改成一個看得見的結果。", en: "Pick the vaguest line and rewrite it as a result someone can see." } },
          { kind: "write", min: 16, prompt: { zh: "把改完的四行按顺序再写一遍。", zhHant: "把改完的四行按順序再寫一遍。", en: "Write the four revised lines, in order." } },
        ],
      },
    ],
  },
  kaifa: {
    title: { zh: "做出别人打得开的一页", zhHant: "做出別人打得開的一頁", en: "Make a page someone else can open" },
    lessons: [
      {
        title: { zh: "先做一页", zhHant: "先做一頁", en: "Make one page first" },
        reading: {
          zh: ["一个单页就够。页面上有标题、一段说明、一个列表。用 HTML 写，用浏览器打开。先不装框架，也不做登录。", "标题写在 title 里，也写在页面上。列表用列表，不要把三条事项做成一张大图。别人不听你解释，也该知道这一页是做什么的。"],
          zhHant: ["一個單頁就夠。頁面上有標題、一段說明、一個列表。用 HTML 寫，用瀏覽器打開。先不裝框架，也不做登入。", "標題寫在 title 裡，也寫在頁面上。列表用列表，不要把三條事項做成一張大圖。別人不聽你解釋，也該知道這一頁是做什麼的。"],
          en: ["One page is enough: a title, a paragraph, and a list. Write HTML and open it in a browser. No framework yet, and no login.", "The title is in the title element and on the page. A list is a list, not one big picture. Someone should know what the page is without you explaining it."],
        },
        tasks: [
          { kind: "write", min: 4, prompt: { zh: "写下这一页的标题。", zhHant: "寫下這一頁的標題。", en: "Write the title of the page." } },
          { kind: "write", min: 12, prompt: { zh: "写下那一段说明：这一页是做什么的。", zhHant: "寫下那一段說明：這一頁是做什麼的。", en: "Write the paragraph: what this page is for." } },
          { kind: "write", min: 12, prompt: { zh: "写下列表里的三条。一条一行。", zhHant: "寫下列表裡的三條。一條一行。", en: "Write three list items, one per line." } },
        ],
      },
      {
        title: { zh: "用手机再看一次", zhHant: "用手機再看一次", en: "Look again on a phone" },
        reading: {
          zh: ["电脑上能开，还不等于别人打得开。把它放到一个公开地址，用自己的手机打开。不要只用缩小的桌面窗口代替。", "看三件事：字能不能读完，按钮会不会挤在一起，要不要横着滑。要横着滑，就加大左右边距，把一行按钮改成上下排列。"],
          zhHant: ["電腦上能開，還不等於別人打得開。把它放到一個公開地址，用自己的手機打開。不要只用縮小的桌面窗口代替。", "看三件事：字能不能讀完，按鈕會不會擠在一起，要不要橫著滑。要橫著滑，就加大左右邊距，把一行按鈕改成上下排列。"],
          en: ["A page that opens on your computer is not yet a page someone else can open. Put it at a public address and open it on your phone. A narrowed window is not a substitute.", "Look at three things: can the words be read, do the buttons collide, and do you scroll sideways? If you scroll sideways, add side space and stack the buttons."],
        },
        tasks: [
          { kind: "check", answer: 1, prompt: { zh: "怎样才算用手机看过？", zhHant: "怎樣才算用手機看過？", en: "What counts as looking on a phone?" }, options: [
            { zh: "把桌面窗口缩窄", zhHant: "把桌面窗口縮窄", en: "Narrow the desktop window" },
            { zh: "用自己的手机打开公开地址", zhHant: "用自己的手機打開公開地址", en: "Open the public address on your phone" },
            { zh: "先装一个框架", zhHant: "先裝一個框架", en: "Install a framework first" },
          ] },
          { kind: "write", min: 8, prompt: { zh: "写下你在手机上看到的一个问题：字、按钮，或横着滑。", zhHant: "寫下你在手機上看到的一個問題：字、按鈕，或橫著滑。", en: "Write one problem you would look for on the phone: type, buttons, or sideways scrolling." } },
          { kind: "write", min: 8, prompt: { zh: "写下你准备改的一处，例如边距或按钮改成上下排列。", zhHant: "寫下你準備改的一處，例如邊距或按鈕改成上下排列。", en: "Write the one change you would make, such as margins or stacking the buttons." } },
        ],
      },
      {
        title: { zh: "交给别人打开", zhHant: "交給別人打開", en: "Hand it to someone else" },
        reading: {
          zh: ["这一页要在没有你解释的情况下被打开。地址给出去之前，确认标题、说明、列表都还在。", "别人打开之后，你只问一件事：要不要横着滑。这一项技能是做出别人打得开的一页，不是先把框架搭完。"],
          zhHant: ["這一頁要在沒有你解釋的情況下被打開。地址給出去之前，確認標題、說明、列表都還在。", "別人打開之後，你只問一件事：要不要橫著滑。這一項技能是做出別人打得開的一頁，不是先把框架搭完。"],
          en: ["The page has to open without you standing there. Before you share the address, check that the title, the paragraph, and the list are still there.", "After someone opens it, ask one thing: did you have to scroll sideways? The skill is a page someone else can open, not a framework you installed first."],
        },
        tasks: [
          { kind: "write", min: 8, prompt: { zh: "写下你准备给别人的那个地址说明：这一页上有什么。", zhHant: "寫下你準備給別人的那個地址說明：這一頁上有什麼。", en: "Write the note you would send with the address: what is on the page." } },
          { kind: "check", answer: 0, prompt: { zh: "别人打开之后，你只问什么？", zhHant: "別人打開之後，你只問什麼？", en: "After they open it, what do you ask?" }, options: [
            { zh: "要不要横着滑", zhHant: "要不要橫著滑", en: "Did you have to scroll sideways" },
            { zh: "好不好看", zhHant: "好不好看", en: "Does it look nice" },
            { zh: "要不要再加登录", zhHant: "要不要再加登入", en: "Should we add login" },
          ] },
          { kind: "write", min: 12, prompt: { zh: "按标题、说明、列表，把这一页的内容再写一遍，作为交给别人之前的核对。", zhHant: "按標題、說明、列表，把這一頁的內容再寫一遍，作為交給別人之前的核對。", en: "Write the title, the paragraph, and the list again, as the check before you hand it over." } },
        ],
      },
    ],
  },
  meishu: {
    title: { zh: "一张图只说一件事", zhHant: "一張圖只說一件事", en: "One picture, one thing" },
    lessons: [
      {
        title: { zh: "先写下那一件事", zhHant: "先寫下那一件事", en: "Name the one thing first" },
        reading: {
          zh: ["做图之前，先写下这张图唯一要说的事。例如：周六下午两点，在礼堂。或者：这一页的标题是店名。", "这件事用最大的字。其他字小一档，而且少。颜色不要超过两个，加上纸色。"],
          zhHant: ["做圖之前，先寫下這張圖唯一要說的事。例如：週六下午兩點，在禮堂。或者：這一頁的標題是店名。", "這件事用最大的字。其他字小一檔，而且少。顏色不要超過兩個，加上紙色。"],
          en: ["Before you design, write the one thing the picture says. Saturday at two, in the hall. Or: the title of this page is the shop’s name.", "That thing gets the largest type. Everything else is a step smaller, and there is less of it. No more than two colors, plus the paper."],
        },
        tasks: [
          { kind: "write", min: 6, prompt: { zh: "用一句话写下这张图唯一要说的事。", zhHant: "用一句話寫下這張圖唯一要說的事。", en: "In one sentence, write the one thing this picture says." } },
          { kind: "write", min: 4, prompt: { zh: "写下最大的字会写的那几个字。只写这件事。", zhHant: "寫下最大的字會寫的那幾個字。只寫這件事。", en: "Write the words that would be the largest type. Only that thing." } },
          { kind: "check", answer: 0, prompt: { zh: "大字应该写什么？", zhHant: "大字應該寫什麼？", en: "What is the large type for?" }, options: [
            { zh: "唯一要说的那件事", zhHant: "唯一要說的那件事", en: "The one thing the picture says" },
            { zh: "所有细节", zhHant: "所有細節", en: "Every detail" },
            { zh: "一句心情", zhHant: "一句心情", en: "A mood" },
          ] },
        ],
      },
      {
        title: { zh: "遮住再看", zhHant: "遮住再看", en: "Cover it and look again" },
        reading: {
          zh: ["遮住小字。如果只看大字还知道主要的事，这张图就成立。遮住大字就不知道在说什么，说明大字还没写到点子上。", "小字只补充时间、地点或一个名字。不要再加第二件同样大的事。"],
          zhHant: ["遮住小字。如果只看大字還知道主要的事，這張圖就成立。遮住大字就不知道在說什麼，說明大字還沒寫到點子上。", "小字只補充時間、地點或一個名字。不要再加第二件同樣大的事。"],
          en: ["Cover the small type. If the large type still says the main thing, the picture holds. If covering the large type leaves nothing, it has not said the point.", "Small type adds a time, a place, or a name. Do not add a second thing at the same size."],
        },
        tasks: [
          { kind: "write", min: 6, prompt: { zh: "写下遮住小字之后，别人仍能读到的那句话。", zhHant: "寫下遮住小字之後，別人仍能讀到的那句話。", en: "Write the sentence that remains when the small type is covered." } },
          { kind: "write", min: 4, prompt: { zh: "写下你准备放进小字的一个补充：时间、地点或名字。", zhHant: "寫下你準備放進小字的一個補充：時間、地點或名字。", en: "Write one small-type detail: a time, a place, or a name." } },
          { kind: "check", answer: 2, prompt: { zh: "小字适合放什么？", zhHant: "小字適合放什麼？", en: "What belongs in the small type?" }, options: [
            { zh: "另一件同样重要的事", zhHant: "另一件同樣重要的事", en: "A second thing, just as important" },
            { zh: "一句心情", zhHant: "一句心情", en: "A mood" },
            { zh: "时间、地点或一个名字", zhHant: "時間、地點或一個名字", en: "A time, a place, or a name" },
          ] },
        ],
      },
      {
        title: { zh: "三个词的评语", zhHant: "三個詞的評語", en: "A critique in three words" },
        reading: {
          zh: ["请别人评的时候，只收三句话：层次清不清楚，字能不能读完，是不是只有一个想法。", "「好看」「再大气一点」「换个字体试试」先放下。这些话没有告诉你改哪一处。评语记在图旁边：一句事实，一句要改的。"],
          zhHant: ["請別人評的時候，只收三句話：層次清不清楚，字能不能讀完，是不是只有一個想法。", "「好看」「再大氣一點」「換個字體試試」先放下。這些話沒有告訴你改哪一處。評語記在圖旁邊：一句事實，一句要改的。"],
          en: ["Ask for only three sentences: is the hierarchy clear, can the words be read, and is there only one idea?", "Set aside “nice,” “make it grander,” and “try another typeface.” Those do not say what to change. Write one fact and one change beside the picture."],
        },
        tasks: [
          { kind: "check", answer: 0, prompt: { zh: "评图时只收哪三个词？", zhHant: "評圖時只收哪三個詞？", en: "Which three words do you accept?" }, options: [
            { zh: "层次、可读、一个想法", zhHant: "層次、可讀、一個想法", en: "Hierarchy, readable, one idea" },
            { zh: "好看、大气、换字体", zhHant: "好看、大氣、換字體", en: "Nice, grander, another typeface" },
            { zh: "颜色、滤镜、心情", zhHant: "顏色、濾鏡、心情", en: "Color, filter, mood" },
          ] },
          { kind: "write", min: 8, prompt: { zh: "替这张图写一句事实，和一句要改的。", zhHant: "替這張圖寫一句事實，和一句要改的。", en: "Write one fact about the picture, and one change." } },
          { kind: "write", min: 8, prompt: { zh: "按这三个词，写下你还会再看一次的那一点。", zhHant: "按這三個詞，寫下你還會再看一次的那一點。", en: "Using those three words, write the one thing you would look at again." } },
        ],
      },
    ],
  },
  anquan: {
    title: { zh: "守住自己的账号和页面", zhHant: "守住自己的帳號和頁面", en: "Keep your account and your page" },
    lessons: [
      {
        title: { zh: "重要账号分开", zhHant: "重要帳號分開", en: "Separate the accounts that matter" },
        reading: {
          zh: ["邮箱，以及放了你作品的账号，都算重要。打开双重验证。每个网站用不同的密码。不要把密码发到聊天里。", "这一课只处理你自己用得上的习惯。不是去试别人的系统。"],
          zhHant: ["郵箱，以及放了你作品的帳號，都算重要。打開雙重驗證。每個網站用不同的密碼。不要把密碼發到聊天裡。", "這一課只處理你自己用得上的習慣。不是去試別人的系統。"],
          en: ["Email counts, and so does the account that holds your work. Turn on two-factor. Use a different password on each site. Do not send a password into a chat.", "This lesson is only about habits you can use yourself. It is not an exercise on someone else’s system."],
        },
        tasks: [
          { kind: "write", min: 4, prompt: { zh: "写下两个你认为重要、应该打开双重验证的账号类型。", zhHant: "寫下兩個你認為重要、應該打開雙重驗證的帳號類型。", en: "Name two kinds of account that should have two-factor on." } },
          { kind: "check", answer: 1, prompt: { zh: "密码该怎么放？", zhHant: "密碼該怎麼放？", en: "What do you do with passwords?" }, options: [
            { zh: "每个网站用同一个", zhHant: "每個網站用同一個", en: "Use the same one on every site" },
            { zh: "每个网站不同，不发到聊天里", zhHant: "每個網站不同，不發到聊天裡", en: "A different one per site, not sent in chat" },
            { zh: "写在公开页面的注释里", zhHant: "寫在公開頁面的註釋裡", en: "Leave one in a public comment" },
          ] },
          { kind: "write", min: 8, prompt: { zh: "写下你准备先检查的一个账号，以及你要看的是不是已经打开双重验证。", zhHant: "寫下你準備先檢查的一個帳號，以及你要看的是不是已經打開雙重驗證。", en: "Write which account you would check first, and that you are looking for two-factor." } },
        ],
      },
      {
        title: { zh: "验证码只留在自己打开的页面", zhHant: "驗證碼只留在自己打開的頁面", en: "A code stays on a page you opened" },
        reading: {
          zh: ["验证码只填在你自己打开的页面上。别人来问，就算报出了你的名字，也不要念给对方。不要把验证码填进别人发来的表格。", "不确定一条链接是不是那个网站，就从收藏夹或手动输入地址进去，不要顺着那条消息点进去。"],
          zhHant: ["驗證碼只填在你自己打開的頁面上。別人來問，就算報出了你的名字，也不要念給對方。不要把驗證碼填進別人發來的表格。", "不確定一條連結是不是那個網站，就從收藏夾或手動輸入地址進去，不要順著那條消息點進去。"],
          en: ["A code goes only into a page you opened yourself. If someone asks, even if they say your name, do not read it out. Do not type it into a form they sent.", "If you are not sure a link is the real site, open it from your bookmarks or type the address. Do not follow the message in."],
        },
        tasks: [
          { kind: "check", answer: 1, prompt: { zh: "有人索要验证码时，你怎么做？", zhHant: "有人索要驗證碼時，你怎麼做？", en: "Someone asks for the code. What do you do?" }, options: [
            { zh: "念给他说出你名字的人", zhHant: "念給他說出你名字的人", en: "Read it out if they say your name" },
            { zh: "不念，只填进自己打开的页面", zhHant: "不念，只填進自己打開的頁面", en: "Do not read it out; type it only on your own page" },
            { zh: "贴到讨论里", zhHant: "貼到討論裡", en: "Paste it into Discuss" },
          ] },
          { kind: "write", min: 8, prompt: { zh: "写下一句你会拒绝的话：对方要验证码时你怎么回。", zhHant: "寫下一句你會拒絕的話：對方要驗證碼時你怎麼回。", en: "Write the sentence you would use to refuse a request for the code." } },
          { kind: "check", answer: 2, prompt: { zh: "不确定链接时，从哪里进？", zhHant: "不確定連結時，從哪裡進？", en: "If you are unsure of a link, where do you enter?" }, options: [
            { zh: "顺着消息点进去", zhHant: "順著消息點進去", en: "Follow the message" },
            { zh: "把验证码先发给对方", zhHant: "把驗證碼先發給對方", en: "Send the code first" },
            { zh: "收藏夹或自己输入地址", zhHant: "收藏夾或自己輸入地址", en: "A bookmark, or type the address" },
          ] },
        ],
      },
      {
        title: { zh: "页面里不放密钥", zhHant: "頁面裡不放密鑰", en: "No key left on the page" },
        reading: {
          zh: ["交出去之前看两眼。密钥、口令、数据库地址，不写进页面，也不放进公开的代码。", "表单只问这件事用得上的信息。留下称呼就够的地方，不再要电话、证件或住址。链接用 https。来路不明的压缩包先不打开。"],
          zhHant: ["交出去之前看兩眼。密鑰、口令、資料庫地址，不寫進頁面，也不放進公開的代碼。", "表單只問這件事用得上的信息。留下稱呼就夠的地方，不再要電話、證件或住址。連結用 https。來路不明的壓縮包先不打開。"],
          en: ["Look twice before you hand a page over. A key, a password, or a database address does not belong on the page or in public code.", "A form asks only for what this thing needs. A place that only needs a name does not also ask for a phone, an ID, or an address. Use https. Do not open an archive you were not expecting."],
        },
        tasks: [
          { kind: "write", min: 8, prompt: { zh: "列出你交页面前要找的两样东西，例如口令或密钥。", zhHant: "列出你交頁面前要找的兩樣東西，例如口令或密鑰。", en: "List two things you would look for before handing the page over, such as a password or a key." } },
          { kind: "check", answer: 0, prompt: { zh: "找到密钥之后怎么做？", zhHant: "找到密鑰之後怎麼做？", en: "You find a key. What next?" }, options: [
            { zh: "移走，不贴到讨论里", zhHant: "移走，不貼到討論裡", en: "Move it, and do not paste it into Discuss" },
            { zh: "贴出来请人看是不是密钥", zhHant: "貼出來請人看是不是密鑰", en: "Paste it and ask if it is a key" },
            { zh: "留在注释里", zhHant: "留在註釋裡", en: "Leave it in a comment" },
          ] },
          { kind: "write", min: 12, prompt: { zh: "写一张你自己的三行清单：双重验证、验证码、页面里的密钥。每行写你要看的那一处。", zhHant: "寫一張你自己的三行清單：雙重驗證、驗證碼、頁面裡的密鑰。每行寫你要看的那一處。", en: "Write your own three-line list: two-factor, codes, and keys on the page. One place to look per line." } },
        ],
      },
    ],
  },
};
