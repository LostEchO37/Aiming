/* One subject per universe. A lesson is a lecture: concept, one case, then tasks for that case. */
window.AIMING_SKILLS = {
  yingxiao: {
    title: { zh: "把一件事写成一句邀请", zhHant: "把一件事寫成一句邀請", en: "Turn one offer into an invitation" },
    lessons: [
      {
        title: { zh: "邀请里只有一件事", zhHant: "邀請裡只有一件事", en: "An invitation offers one thing" },
        concept: {
          zh: ["营销这一讲只处理一件事：你要别人做什么。不是介绍你有多好，也不是把所有优点排完。一则短消息里，只留一个可以去做的事，并且说给一个具体的人。", "顺序是固定的。先写这件事是什么，句子里要有名字和地点。再写谁会在什么时候用到它，写一个人，不写所有人。最后只留一个差别，让这个人知道为什么是这一件，而不是旁边的那一件。"],
          zhHant: ["營銷這一講只處理一件事：你要別人做什麼。不是介紹你有多好，也不是把所有優點排完。一則短消息裡，只留一個可以去做的事，並且說給一個具體的人。", "順序是固定的。先寫這件事是什麼，句子裡要有名字和地點。再寫誰會在什麼時候用到它，寫一個人，不寫所有人。最後只留一個差別，讓這個人知道為什麼是這一件，而不是旁邊的那一件。"],
          en: ["This lecture is only about what you want someone to do. It is not a list of virtues. A short message keeps one action, said to one person.", "The order stays fixed. What it is, with a name and a place. Who uses it, and when: one person, not everyone. Then one difference, so they know why this and not the thing next to it."],
        },
        case: {
          zh: ["深水埗福华街有一家叫「北窗」的面包店。午饭时间，对面两栋写字楼的人常在门口排队。店主想让他们在工作日上午十点前，订一份带汤的午饭盒，而不是中午再来挤。", "她原来的句子是：「北窗是最好的面包店，适合所有人，新鲜又优质。」这句话没有店在哪，没有谁在十点前订，也没有午饭盒。"],
          zhHant: ["深水埗福華街有一家叫「北窗」的麵包店。午飯時間，對面兩棟寫字樓的人常在門口排隊。店主想讓他們在工作日上午十點前，訂一份帶湯的午飯盒，而不是中午再來擠。", "她原來的句子是：「北窗是最好的麵包店，適合所有人，新鮮又優質。」這句話沒有店在哪，沒有誰在十點前訂，也沒有午飯盒。"],
          en: ["Bakery North Window sits on Fuk Wa Street in Sham Shui Po. At lunch, people from the two office blocks across the street queue at the door. The owner wants them to order a lunch box with soup before ten on a weekday, instead of crowding in at noon.", "Her old line was: “North Window is the best bakery, for everyone, fresh and premium.” It has no street, no person ordering before ten, and no lunch box."],
        },
        tasks: [
          { kind: "write", min: 12, prompt: { zh: "替北窗写下第一句：它是什么。句中要有「北窗」和福华街。", zhHant: "替北窗寫下第一句：它是什麼。句中要有「北窗」和福華街。", en: "Write North Window’s first sentence: what it is. Include the name and Fuk Wa Street." } },
          { kind: "write", min: 12, prompt: { zh: "写下第二句：谁会在工作日上午十点前订那份带汤的午饭盒。写一种人，不要写所有人。", zhHant: "寫下第二句：誰會在工作日上午十點前訂那份帶湯的午飯盒。寫一種人，不要寫所有人。", en: "Write the second sentence: who orders the lunch box with soup before ten on a weekday. One kind of person, not everyone." } },
          { kind: "check", answer: 1, prompt: { zh: "北窗这则邀请里，不该留下哪一句？", zhHant: "北窗這則邀請裡，不該留下哪一句？", en: "Which line does not belong in North Window’s invitation?" }, options: [
            { zh: "工作日上午十点前订一份带汤的午饭盒", zhHant: "工作日上午十點前訂一份帶湯的午飯盒", en: "Order a lunch box with soup before ten on a weekday" },
            { zh: "北窗是最好的面包店，适合所有人", zhHant: "北窗是最好的麵包店，適合所有人", en: "North Window is the best bakery, for everyone" },
            { zh: "店在深水埗福华街", zhHant: "店在深水埗福華街", en: "The shop is on Fuk Wa Street in Sham Shui Po" },
          ] },
        ],
      },
      {
        title: { zh: "用一个看得见的事实代替形容词", zhHant: "用一個看得見的事實代替形容詞", en: "Replace a compliment with one fact" },
        concept: {
          zh: ["形容词让人点头，但不让人行动。「新鲜」「优质」「首选」可以安在任何店上。营销里，一个事实只证明这一件邀请：别人能核对的时间、地点、数量或做法。", "一则短消息里只留一个事实。事实多了，邀请又散了。读的人只要能用这个事实判断：这是不是我要的那一件。"],
          zhHant: ["形容詞讓人點頭，但不讓人行動。「新鮮」「優質」「首選」可以安在任何店上。營銷裡，一個事實只證明這一件邀請：別人能核對的時間、地點、數量或做法。", "一則短消息裡只留一個事實。事實多了，邀請又散了。讀的人只要能用這個事實判斷：這是不是我要的那一件。"],
          en: ["Adjectives get a nod, not an action. Fresh, premium, and first choice can sit on any shop. In this subject, one fact proves this invitation: a time, a place, a number, or a method someone can check.", "Keep one fact. More facts scatter the offer. The reader only needs enough to decide whether this is the thing they wanted."],
        },
        case: {
          zh: ["北窗把新传单印出来，开头仍是「新鲜、优质、首选」。店主其实知道一件别人能核对的事：午饭盒在十二点前送到福华街对面那两栋写字楼，每份有汤，汤是单独一盒。", "排队的人看不见「优质」。他们看得见汤盒，也知道十二点前电梯口有没有人送上来。"],
          zhHant: ["北窗把新傳單印出來，開頭仍是「新鮮、優質、首選」。店主其實知道一件別人能核對的事：午飯盒在十二點前送到福華街對面那兩棟寫字樓，每份有湯，湯是單獨一盒。", "排隊的人看不見「優質」。他們看得見湯盒，也知道十二點前電梯口有沒有人送上來。"],
          en: ["The new flyer still opens with “fresh, premium, first choice.” The owner does know one checkable fact: the lunch box reaches the two office blocks across Fuk Wa Street before noon, and the soup is in its own box.", "The queue cannot see “premium.” They can see the soup box, and they know whether anyone comes up to the lift lobby before noon."],
        },
        tasks: [
          { kind: "write", min: 12, prompt: { zh: "把「新鲜、优质、首选」换成北窗这一个事实：十二点前送到对面两栋写字楼，汤单独一盒。写成一句。", zhHant: "把「新鮮、優質、首選」換成北窗這一個事實：十二點前送到對面兩棟寫字樓，湯單獨一盒。寫成一句。", en: "Replace “fresh, premium, first choice” with North Window’s one fact: delivered to the two office blocks before noon, soup in its own box. One sentence." } },
          { kind: "check", answer: 0, prompt: { zh: "哪一个才是北窗这则邀请的事实？", zhHant: "哪一個才是北窗這則邀請的事實？", en: "Which is the fact in North Window’s invitation?" }, options: [
            { zh: "汤单独一盒，十二点前送到对面写字楼", zhHant: "湯單獨一盒，十二點前送到對面寫字樓", en: "Soup in its own box, delivered to the office blocks before noon" },
            { zh: "新鲜、优质、首选", zhHant: "新鮮、優質、首選", en: "Fresh, premium, first choice" },
            { zh: "全港最好的午饭", zhHant: "全港最好的午飯", en: "The best lunch in the city" },
          ] },
          { kind: "write", min: 8, prompt: { zh: "如果还要加第二个事实，写一句说明你为什么不加。只针对北窗这份午饭盒。", zhHant: "如果還要加第二個事實，寫一句說明你為什麼不加。只針對北窗這份午飯盒。", en: "If you were tempted to add a second fact, write one sentence on why you will not. Only about this lunch box." } },
        ],
      },
      {
        title: { zh: "结尾只请人做一步", zhHant: "結尾只請人做一步", en: "The ending asks for one step" },
        concept: {
          zh: ["邀请的最后一行不是气氛，是一步。人要知道在哪里、在什么时限前、留下什么。步子多于一步，这则消息就又变成介绍。", "这一步要和前面的那一件事是同一件。前面说的是订午饭盒，结尾就不能改口请人来店里随便坐。"],
          zhHant: ["邀請的最後一行不是氣氛，是一步。人要知道在哪裡、在什麼時限前、留下什麼。步子多於一步，這則消息就又變成介紹。", "這一步要和前面的那一件事是同一件。前面說的是訂午飯盒，結尾就不能改口請人來店裡隨便坐。"],
          en: ["The last line is not a mood. It is one step: where, by when, and what to leave. More than one step turns the message back into a brochure.", "The step has to be the same offer. If the front is a lunch-box order, the ending cannot switch to “drop in and sit.”"],
        },
        case: {
          zh: ["北窗传单的结尾现在是：「欢迎光临，环境舒适。」写字楼的人看完，仍然不知道十点前要留下名字和份数，也不知道是在柜台说，还是打电话。", "店主真正要的一步只有这个：工作日上午十点前，在福华街店里的柜台，或打店里的电话，留下名字和午饭盒份数。"],
          zhHant: ["北窗傳單的結尾現在是：「歡迎光臨，環境舒適。」寫字樓的人看完，仍然不知道十點前要留下名字和份數，也不知道是在櫃檯說，還是打電話。", "店主真正要的一步只有這個：工作日上午十點前，在福華街店裡的櫃檯，或打店裡的電話，留下名字和午飯盒份數。"],
          en: ["The flyer now ends: “You are welcome, the room is comfortable.” Office people still do not know to leave a name and a number of boxes before ten, or whether that happens at the counter or by phone.", "The only step the owner wants: before ten on a weekday, at the Fuk Wa Street counter or by the shop phone, leave a name and how many lunch boxes."],
        },
        tasks: [
          { kind: "write", min: 16, prompt: { zh: "替北窗写结尾那一行：十点前、在柜台或电话、留下名字和份数。不要写欢迎光临。", zhHant: "替北窗寫結尾那一行：十點前、在櫃檯或電話、留下名字和份數。不要寫歡迎光臨。", en: "Write North Window’s last line: before ten, at the counter or by phone, leave a name and a number of boxes. Do not write “you are welcome.”" } },
          { kind: "check", answer: 2, prompt: { zh: "北窗这则邀请的结尾应该请人做什么？", zhHant: "北窗這則邀請的結尾應該請人做什麼？", en: "What should North Window’s last line ask for?" }, options: [
            { zh: "来店里感受环境", zhHant: "來店裡感受環境", en: "Come in and enjoy the room" },
            { zh: "告诉朋友这是最好的店", zhHant: "告訴朋友這是最好的店", en: "Tell a friend it is the best shop" },
            { zh: "十点前留下名字和午饭盒份数", zhHant: "十點前留下名字和午飯盒份數", en: "Leave a name and a number of lunch boxes before ten" },
          ] },
          { kind: "write", min: 24, prompt: { zh: "把北窗的三句连成一则完整邀请：它是什么、给谁、最后那一步。", zhHant: "把北窗的三句連成一則完整邀請：它是什麼、給誰、最後那一步。", en: "Join North Window’s three sentences into one invitation: what it is, who it is for, and the last step." } },
        ],
      },
    ],
  },
  renshi: {
    title: { zh: "把一件工作交到不用猜", zhHant: "把一件工作交到不用猜", en: "Hand over work that needs no guess" },
    lessons: [
      {
        title: { zh: "交接是四行，不是一句拜托", zhHant: "交接是四行，不是一句拜託", en: "A handover is four lines, not a favor" },
        concept: {
          zh: ["人事这一讲把工作从一个人交到另一个人。交出去的不是态度，是四行：做什么，谁做，做到什么样算完成，什么时候看一眼。少一行，对方就要来猜。", "性格词帮不上这四行。「积极」「细心」「尽快」都不能拿去印、拿去对。时间要能指到钟点，完成要能看见。"],
          zhHant: ["人事這一講把工作從一個人交到另一個人。交出去的不是態度，是四行：做什麼，誰做，做到什麼樣算完成，什麼時候看一眼。少一行，對方就要來猜。", "性格詞幫不上這四行。「積極」「細心」「盡快」都不能拿去印、拿去對。時間要能指到鐘點，完成要能看見。"],
          en: ["This lecture moves a piece of work from one person to another. What you hand over is not an attitude. It is four lines: the task, who does it, what done looks like, and when you will look. Drop a line and the other person has to guess.", "Character words do not help. Proactive, careful, and soon cannot be printed or checked. The time has to point at a clock. Done has to be visible."],
        },
        case: {
          zh: ["迎新摊位要在周四下午三点前，备好 200 张姓名牌。牌上要有中文名和英文名，英文名不能被切到第二行以外。这件事交给同学阿 May，不是交给「大家」。", "有人在群里写：「阿 May 尽快把姓名牌搞定，认真一点。」阿 May 不知道三点是不是截止，也不知道切边算不算没完成。"],
          zhHant: ["迎新攤位要在週四下午三點前，備好 200 張姓名牌。牌上要有中文名和英文名，英文名不能被切到第二行以外。這件事交給同學阿 May，不是交給「大家」。", "有人在群裡寫：「阿 May 盡快把姓名牌搞定，認真一點。」阿 May 不知道三點是不是截止，也不知道切邊算不算沒完成。"],
          en: ["The orientation booth needs 200 name cards before Thursday at three. Each card needs a Chinese name and an English name, and the English name must not be cut off past the second line. The work goes to May, not to “everyone.”", "Someone wrote in the group: “May, finish the cards soon, and be serious.” May does not know whether three o’clock is the deadline, or whether a cut-off name counts as unfinished."],
        },
        tasks: [
          { kind: "write", min: 16, prompt: { zh: "把姓名牌写成四行：做什么、谁做、怎样算完成、周四几点看一眼。不要写尽快。", zhHant: "把姓名牌寫成四行：做什麼、誰做、怎樣算完成、週四幾點看一眼。不要寫盡快。", en: "Write the name cards in four lines: the task, who does it, what done looks like, and when on Thursday you will look. Do not write “soon.”" } },
          { kind: "check", answer: 0, prompt: { zh: "阿 May 的四行里，完成应该怎么写？", zhHant: "阿 May 的四行裡，完成應該怎麼寫？", en: "How should “done” be written for May?" }, options: [
            { zh: "200 张牌上有中文名和英文名，英文名不被切掉", zhHant: "200 張牌上有中文名和英文名，英文名不被切掉", en: "200 cards with both names, English name not cut off" },
            { zh: "认真一点就好", zhHant: "認真一點就好", en: "Just be more serious" },
            { zh: "大家一起看着办", zhHant: "大家一起看著辦", en: "Everyone will see to it" },
          ] },
          { kind: "write", min: 8, prompt: { zh: "群里那句「尽快、认真一点」会让阿 May 猜哪一行？只写那一行缺了什么。", zhHant: "群裡那句「盡快、認真一點」會讓阿 May 猜哪一行？只寫那一行缺了什麼。", en: "Which of May’s four lines does “soon, be serious” force her to guess? Write only what that line is missing." } },
        ],
      },
      {
        title: { zh: "反馈是事实加一处修改", zhHant: "反饋是事實加一處修改", en: "Feedback is a fact plus one change" },
        concept: {
          zh: ["工作交出去之后，反馈不是评这个人。第一句只说你看见的，带数字或位置。第二句只改一处。改两处，对方不知道先动哪一处。", "不要加「另外」，也不要顺便写态度。态度留到下一次。这一讲的反馈只服务于已经写下的那件工作。"],
          zhHant: ["工作交出去之後，反饋不是評這個人。第一句只說你看見的，帶數字或位置。第二句只改一處。改兩處，對方不知道先動哪一處。", "不要加「另外」，也不要順便寫態度。態度留到下一次。這一講的反饋只服務於已經寫下的那件工作。"],
          en: ["After the work is handed over, feedback is not a review of the person. The first sentence is what you saw, with a number or a place. The second changes one thing. Two changes leave them unsure which to move.", "Do not add “also,” and do not attach an attitude. Attitude waits. This feedback only serves the job already written down."],
        },
        case: {
          zh: ["周四中午，200 张姓名牌送回来了。中文名都在。抽看的 20 张里，有 14 张的英文名在第二行被切掉，只剩前四个字母。", "阿 May 在等你说话。你可以写她粗心，也可以只写：第二行字号改小一号，英文名要完整。"],
          zhHant: ["週四中午，200 張姓名牌送回來了。中文名都在。抽看的 20 張裡，有 14 張的英文名在第二行被切掉，只剩前四個字母。", "阿 May 在等你說話。你可以寫她粗心，也可以只寫：第二行字號改小一號，英文名要完整。"],
          en: ["The 200 cards came back at noon on Thursday. Every Chinese name is there. Of the 20 you checked, 14 have the English name cut on the second line, with only the first four letters left.", "May is waiting. You could call her careless, or you could write only this: make the second line one size smaller so the English name is complete."],
        },
        tasks: [
          { kind: "write", min: 12, prompt: { zh: "写给阿 May 的第一句，只写你看见的：20 张里 14 张英文名被切。", zhHant: "寫給阿 May 的第一句，只寫你看見的：20 張裡 14 張英文名被切。", en: "Write May’s first sentence: only what you saw, 14 of 20 English names cut off." } },
          { kind: "write", min: 8, prompt: { zh: "写第二句，只改第二行字号这一处。", zhHant: "寫第二句，只改第二行字號這一處。", en: "Write the second sentence. Change only the type size on the second line." } },
          { kind: "check", answer: 1, prompt: { zh: "这张姓名牌的反馈，不该出现哪一句？", zhHant: "這張姓名牌的反饋，不該出現哪一句？", en: "Which sentence does not belong in the feedback on these cards?" }, options: [
            { zh: "第二行改小一号，英文名要完整", zhHant: "第二行改小一號，英文名要完整", en: "Make the second line one size smaller so the English name is complete" },
            { zh: "另外你下次细心一点", zhHant: "另外你下次細心一點", en: "Also, be more careful next time" },
            { zh: "抽看的 20 张里有 14 张被切", zhHant: "抽看的 20 張裡有 14 張被切", en: "14 of the 20 cards you checked were cut off" },
          ] },
        ],
      },
      {
        title: { zh: "对谈只解开还要猜的那一行", zhHant: "對談只解開還要猜的那一行", en: "The conversation unlocks only the line that still needs a guess" },
        concept: {
          zh: ["短对谈不是复盘人格。你把四行放在两人中间，只问：哪一行还要猜？对方指出一行，你就改那一行，不扩大成对这个人的评价。", "问完如果对方反问一个词，例如「尽快」，你用钟点回答，不解释你其实是信任她。信任不写进这一行。"],
          zhHant: ["短對談不是複盤人格。你把四行放在兩人中間，只問：哪一行還要猜？對方指出一行，你就改那一行，不擴大成對這個人的評價。", "問完如果對方反問一個詞，例如「盡快」，你用鐘點回答，不解釋你其實是信任她。信任不寫進這一行。"],
          en: ["A short conversation is not a review of character. You put the four lines between you and ask which line still needs a guess. They name a line. You rewrite that line. You do not widen it into a judgment of them.", "If they ask what a word means, answer with a clock time. Do not explain that you trust them. Trust does not go in the line."],
        },
        case: {
          zh: ["阿 May 看着四行，只问了一句：「尽快是周四三点，还是做完就可以？」她没有问你觉不觉得她认真。", "你如果回答「我相信你」，姓名牌的截止时间仍然空着。这一行要写成：周四下午三点前送到摊位，三点你来看英文名有没有被切。"],
          zhHant: ["阿 May 看著四行，只問了一句：「盡快是週四三點，還是做完就可以？」她沒有問你覺不覺得她認真。", "你如果回答「我相信你」，姓名牌的截止時間仍然空著。這一行要寫成：週四下午三點前送到攤位，三點你來看英文名有沒有被切。"],
          en: ["May looks at the four lines and asks only: “Does soon mean Thursday at three, or whenever it is finished?” She does not ask whether you think she is serious.", "If you answer “I trust you,” the deadline is still empty. The line has to say: at the booth before Thursday at three, and at three you will check whether the English names are cut."],
        },
        tasks: [
          { kind: "write", min: 12, prompt: { zh: "用钟点回答阿 May：尽快指到周四几点，三点你来看什么。", zhHant: "用鐘點回答阿 May：盡快指到週四幾點，三點你來看什麼。", en: "Answer May with a clock time: what soon means on Thursday, and what you will check at three." } },
          { kind: "check", answer: 2, prompt: { zh: "阿 May 问尽快时，你不该回答哪一句？", zhHant: "阿 May 問盡快時，你不該回答哪一句？", en: "Which answer should you not give when May asks what soon means?" }, options: [
            { zh: "周四下午三点前送到摊位", zhHant: "週四下午三點前送到攤位", en: "At the booth before Thursday at three" },
            { zh: "三点看英文名有没有被切", zhHant: "三點看英文名有沒有被切", en: "At three, check whether the English names are cut" },
            { zh: "我相信你，你看着办", zhHant: "我相信你，你看著辦", en: "I trust you, use your judgment" },
          ] },
          { kind: "write", min: 20, prompt: { zh: "把改完的四行再写一遍，专门给阿 May 的姓名牌。每一行都能核对。", zhHant: "把改完的四行再寫一遍，專門給阿 May 的姓名牌。每一行都能核對。", en: "Write the four revised lines again, only for May’s name cards. Each line can be checked." } },
        ],
      },
    ],
  },
  kaifa: {
    title: { zh: "做一页陌生人打得开的页面", zhHant: "做一頁陌生人打得開的頁面", en: "A page a stranger can open" },
    lessons: [
      {
        title: { zh: "一页只放标题、说明、列表", zhHant: "一頁只放標題、說明、列表", en: "A page holds a title, a note, and a list" },
        concept: {
          zh: ["数字开发这一讲不从框架开始。陌生人打开的第一页，只要能在没有你讲解的情况下知道：这是什么、现在有什么。结构就是标题、一段说明、一个列表。", "列表里的每一条都是文字。不要把三条事项画成一张图。图打开失败的时候，页面上就什么都不剩。登录也先不做。这一页还没有需要守住的身份。"],
          zhHant: ["數字開發這一講不從框架開始。陌生人打開的第一頁，只要能在沒有你講解的情況下知道：這是什麼、現在有什麼。結構就是標題、一段說明、一個列表。", "列表裡的每一條都是文字。不要把三條事項畫成一張圖。圖打開失敗的時候，頁面上就什麼都不剩。登入也先不做。這一頁還沒有需要守住的身份。"],
          en: ["This lecture does not start with a framework. The first page a stranger opens has to say what it is, and what is there now, without you narrating. The structure is a title, one paragraph, and a list.", "Each list item is text. Do not draw three items into one picture. If the picture fails, the page is empty. Login waits. This page does not yet have an identity to protect."],
        },
        case: {
          zh: ["宿舍六楼本周丢了三样东西：一把黑伞、一张蓝色校园卡、一副有线耳机。楼长想要一页，让不在宿舍的人也能看见。页名就叫「六楼失物」。", "有人建议先做登录，再把三样东西画成一张海报图。楼长要的是现在就能打开的一页，不是一套账号系统。"],
          zhHant: ["宿舍六樓本週丟了三樣東西：一把黑傘、一張藍色校園卡、一副有線耳機。樓長想要一頁，讓不在宿舍的人也能看見。頁名就叫「六樓失物」。", "有人建議先做登入，再把三樣東西畫成一張海報圖。樓長要的是現在就能打開的一頁，不是一套帳號系統。"],
          en: ["Three things went missing on dorm floor six this week: a black umbrella, a blue campus card, and wired earphones. The floor lead wants one page so someone who is not in the dorm can still see them. The page is called Floor Six Lost Property.", "Someone suggested login first, and a poster image of the three things. The floor lead wants a page that opens now, not an account system."],
        },
        tasks: [
          { kind: "write", min: 8, prompt: { zh: "写下「六楼失物」这页的标题，和一段说明：这一页给谁看、上面是本周丢的东西。", zhHant: "寫下「六樓失物」這頁的標題，和一段說明：這一頁給誰看、上面是本週丟的東西。", en: "Write the title of Floor Six Lost Property, and one paragraph: who it is for, and that these are this week’s lost things." } },
          { kind: "write", min: 12, prompt: { zh: "把黑伞、蓝色校园卡、有线耳机写成三条，一条一行。不要写成一张图的说明。", zhHant: "把黑傘、藍色校園卡、有線耳機寫成三條，一條一行。不要寫成一張圖的說明。", en: "Write the umbrella, the blue card, and the earphones as three lines. Not a caption for one picture." } },
          { kind: "check", answer: 0, prompt: { zh: "六楼失物这第一页，现在不该先做哪个？", zhHant: "六樓失物這第一頁，現在不該先做哪個？", en: "What should this first page not do yet?" }, options: [
            { zh: "先做登录", zhHant: "先做登入", en: "Login first" },
            { zh: "标题写六楼失物", zhHant: "標題寫六樓失物", en: "Title it Floor Six Lost Property" },
            { zh: "用文字列出三样东西", zhHant: "用文字列出三樣東西", en: "List the three things as text" },
          ] },
        ],
      },
      {
        title: { zh: "用手机看字、按钮和横滑", zhHant: "用手機看字、按鈕和橫滑", en: "On a phone: type, buttons, sideways scroll" },
        concept: {
          zh: ["电脑上能开，只说明你的窗口够宽。这一讲要看的是一只真的手机：字能不能读完，两个按钮会不会挤在一行，页面要不要横着滑。", "横着滑通常不是内容多，是左右没有边距，或两个动作被放进了同一行。改法是加大边距，把那一行改成上下。缩小桌面窗口不能代替这一步。"],
          zhHant: ["電腦上能開，只說明你的窗口夠寬。這一講要看的是一隻真的手機：字能不能讀完，兩個按鈕會不會擠在一行，頁面要不要橫著滑。", "橫著滑通常不是內容多，是左右沒有邊距，或兩個動作被放進了同一行。改法是加大邊距，把那一行改成上下。縮小桌面窗口不能代替這一步。"],
          en: ["Opening on your computer only shows that your window is wide. This lecture looks at a real phone: can the words be read, do two buttons share one row, and does the page scroll sideways?", "Sideways scrolling is usually missing side space, or two actions forced onto one row. Add space and stack them. A narrowed desktop window is not this step."],
        },
        case: {
          zh: ["六楼失物页在楼长的笔记本上很宽。「我捡到了」和「返回」并排，字也完整。楼长用自己的手机打开公开地址，两个按钮挤成一行，黑伞那一条要横着滑才看得见「黑」。", "她把浏览器窗口拖窄再看，按钮又分开了。这不能算用手机看过。"],
          zhHant: ["六樓失物頁在樓長的筆記本上很寬。「我撿到了」和「返回」並排，字也完整。樓長用自己的手機打開公開地址，兩個按鈕擠成一行，黑傘那一條要橫著滑才看得見「黑」。", "她把瀏覽器窗口拖窄再看，按鈕又分開了。這不能算用手機看過。"],
          en: ["On the floor lead’s laptop the page is wide. “I found it” and “Back” sit side by side, and the words are whole. On her own phone, the buttons share one row, and the umbrella line has to scroll sideways before “black” is visible.", "She drags the desktop window narrower and the buttons separate again. That is not looking on a phone."],
        },
        tasks: [
          { kind: "check", answer: 1, prompt: { zh: "六楼失物怎样才算用手机看过？", zhHant: "六樓失物怎樣才算用手機看過？", en: "What counts as checking Floor Six on a phone?" }, options: [
            { zh: "把笔记本窗口拖窄", zhHant: "把筆記本窗口拖窄", en: "Drag the laptop window narrower" },
            { zh: "用自己的手机打开那个公开地址", zhHant: "用自己的手機打開那個公開地址", en: "Open the public address on your own phone" },
            { zh: "先确认桌面上两个按钮是并排的", zhHant: "先確認桌面上兩個按鈕是並排的", en: "First confirm the buttons sit side by side on the desktop" },
          ] },
          { kind: "write", min: 12, prompt: { zh: "写下这只手机上的两处：按钮怎样挤，「黑伞」怎样被切。", zhHant: "寫下這隻手機上的兩處：按鈕怎樣擠，「黑傘」怎樣被切。", en: "Write the two problems on this phone: how the buttons collide, and how “black umbrella” is cut." } },
          { kind: "write", min: 8, prompt: { zh: "只写你要改的一处：边距，或把「我捡到了」和「返回」改成上下。", zhHant: "只寫你要改的一處：邊距，或把「我撿到了」和「返回」改成上下。", en: "Write the one change: side space, or stacking “I found it” and “Back.”" } },
        ],
      },
      {
        title: { zh: "地址给一个不在现场的人", zhHant: "地址給一個不在現場的人", en: "Give the address to someone who is not there" },
        concept: {
          zh: ["页面的最后一关不是你自己再看一遍，是一个没听过你讲解的人。你把地址给出去，只附这一页上有什么，不多解释。", "对方打开之后，你只问一个和这一讲有关的问题：要不要横着滑。不问好不好看。好看不告诉你按钮有没有挤在一起。"],
          zhHant: ["頁面的最後一關不是你自己再看一遍，是一個沒聽過你講解的人。你把地址給出去，只附這一頁上有什麼，不多解釋。", "對方打開之後，你只問一個和這一講有關的問題：要不要橫著滑。不問好不好看。好看不告訴你按鈕有沒有擠在一起。"],
          en: ["The last gate is not you looking again. It is someone who never heard you explain. You send the address and only what is on the page.", "After they open it, you ask one question from this lecture: did you have to scroll sideways? Not whether it looks nice. Nice does not tell you if the buttons collided."],
        },
        case: {
          zh: ["楼长把六楼失物的地址发给正在地铁上的室友。室友没参加过楼会。消息里如果写一大段背景，他不会看。他需要的是：这一页有黑伞、蓝色校园卡、有线耳机。", "他用手机点开。楼长只准备问他一句：列表要不要横着滑。"],
          zhHant: ["樓長把六樓失物的地址發給正在地鐵上的室友。室友沒參加過樓會。消息裡如果寫一大段背景，他不會看。他需要的是：這一頁有黑傘、藍色校園卡、有線耳機。", "他用手機點開。樓長只準備問他一句：列表要不要橫著滑。"],
          en: ["The floor lead sends the address to a roommate on the MTR. He was not at the floor meeting. A long background will not be read. He needs this: the page lists a black umbrella, a blue campus card, and wired earphones.", "He opens it on his phone. She is ready to ask only whether the list scrolls sideways."],
        },
        tasks: [
          { kind: "write", min: 16, prompt: { zh: "写给地铁上那位室友的两三句：地址是六楼失物，页上有哪三样。不要写楼会背景。", zhHant: "寫給地鐵上那位室友的兩三句：地址是六樓失物，頁上有哪三樣。不要寫樓會背景。", en: "Write two or three sentences for the roommate on the train: the page is Floor Six Lost Property, and name the three things. No floor-meeting background." } },
          { kind: "check", answer: 0, prompt: { zh: "他打开之后，楼长只问哪一句？", zhHant: "他打開之後，樓長只問哪一句？", en: "After he opens it, what does she ask?" }, options: [
            { zh: "列表要不要横着滑", zhHant: "列表要不要橫著滑", en: "Does the list scroll sideways" },
            { zh: "这一页好不好看", zhHant: "這一頁好不好看", en: "Does the page look nice" },
            { zh: "要不要先注册再看", zhHant: "要不要先註冊再看", en: "Should he register before looking" },
          ] },
          { kind: "write", min: 12, prompt: { zh: "假设他回答要横着滑。写下你回到六楼失物页会改的那一处。", zhHant: "假設他回答要橫著滑。寫下你回到六樓失物頁會改的那一處。", en: "Suppose he says it scrolls sideways. Write the one change you would make on Floor Six." } },
        ],
      },
    ],
  },
  meishu: {
    title: { zh: "一张海报只说一件事", zhHant: "一張海報只說一件事", en: "A poster says one thing" },
    lessons: [
      {
        title: { zh: "先决定大字", zhHant: "先決定大字", en: "Decide the large type first" },
        concept: {
          zh: ["美术这一讲把一张海报收成一件事。做图之前先用一句话写下它唯一要说的，然后只有这句话里的词可以做成大字。其余都小一档。", "大字一多，海报就在说两件事。看的人远看只能抓住最大的那一组。所以大字不是装饰，是你允许别人只记住的那一件。"],
          zhHant: ["美術這一講把一張海報收成一件事。做圖之前先用一句話寫下它唯一要說的，然後只有這句話裡的詞可以做成大字。其餘都小一檔。", "大字一多，海報就在說兩件事。看的人遠看只能抓住最大的那一組。所以大字不是裝飾，是你允許別人只記住的那一件。"],
          en: ["This lecture reduces a poster to one thing. Before you design, write that thing in a sentence. Only words from that sentence may become the large type. Everything else is a step smaller.", "Too much large type means the poster says two things. From far away, people catch only the largest group. Large type is not decoration. It is the one thing you allow them to remember."],
        },
        case: {
          zh: ["大学会堂周六下午两点有一场说明会。海报要让走廊里走过的人知道时间和地点，而不是感到被欢迎。", "现在的稿子把「欢迎」做成最大的字，时间和「大学会堂」都缩在下面。人走过只读到欢迎，不知道两点要去哪里。"],
          zhHant: ["大學會堂週六下午兩點有一場說明會。海報要讓走廊裡走過的人知道時間和地點，而不是感到被歡迎。", "現在的稿子把「歡迎」做成最大的字，時間和「大學會堂」都縮在下面。人走過只讀到歡迎，不知道兩點要去哪裡。"],
          en: ["There is a briefing in the University Hall on Saturday at two. The poster has to tell someone walking the corridor the time and the place, not that they are welcome.", "The current draft makes “Welcome” the largest word. The time and “University Hall” sit small underneath. People walking past only read welcome, and do not know where to be at two."],
        },
        tasks: [
          { kind: "write", min: 8, prompt: { zh: "用一句话写下这张会堂海报唯一要说的事：周六几点、在哪里。", zhHant: "用一句話寫下這張會堂海報唯一要說的事：週六幾點、在哪裡。", en: "In one sentence, write the one thing this hall poster says: what time on Saturday, and where." } },
          { kind: "write", min: 4, prompt: { zh: "写下可以做成大字的词。只能来自上一句，不要写欢迎。", zhHant: "寫下可以做成大字的詞。只能來自上一句，不要寫歡迎。", en: "Write the words allowed to be large. Only from that sentence. Do not write welcome." } },
          { kind: "check", answer: 0, prompt: { zh: "这张会堂海报的大字不该是哪个？", zhHant: "這張會堂海報的大字不該是哪個？", en: "Which should not be the large type on this hall poster?" }, options: [
            { zh: "欢迎", zhHant: "歡迎", en: "Welcome" },
            { zh: "周六下午两点", zhHant: "週六下午兩點", en: "Saturday at two" },
            { zh: "大学会堂", zhHant: "大學會堂", en: "University Hall" },
          ] },
        ],
      },
      {
        title: { zh: "遮住小字还剩那一件事", zhHant: "遮住小字還剩那一件事", en: "Cover the small type and the one thing remains" },
        concept: {
          zh: ["小字是补充，不是第二件同样大的事。检验方法很具体：用手遮住小字，只留大字。如果剩下的仍是这一张海报要说的那一件，层次就成立。", "如果遮住大字，页面就不知道在说什么，说明大字选错了。小字只放一个补充，例如门口从哪边进，而不是再写一句口号。"],
          zhHant: ["小字是補充，不是第二件同樣大的事。檢驗方法很具體：用手遮住小字，只留大字。如果剩下的仍是這一張海報要說的那一件，層次就成立。", "如果遮住大字，頁面就不知道在說什麼，說明大字選錯了。小字只放一個補充，例如門口從哪邊進，而不是再寫一句口號。"],
          en: ["Small type adds. It is not a second thing at the same size. The test is physical: cover the small type and leave the large. If what remains is still the one thing, the hierarchy holds.", "If covering the large type leaves the poster mute, the large type was the wrong choice. Small type carries one extra, such as which door, not another slogan."],
        },
        case: {
          zh: ["会堂海报改了一版。大字仍是「欢迎」。小字是「周六下午两点，大学会堂，从正门进」。遮住小字，走廊上的人只看见欢迎。", "遮住「欢迎」，才看见两点和会堂。这说明大字和小字装反了。正门可以从哪边进，才是该放进小字的那一个补充。"],
          zhHant: ["會堂海報改了一版。大字仍是「歡迎」。小字是「週六下午兩點，大學會堂，從正門進」。遮住小字，走廊上的人只看見歡迎。", "遮住「歡迎」，才看見兩點和會堂。這說明大字和小字裝反了。正門從哪邊進，才是該放進小字的那一個補充。"],
          en: ["A revised hall poster still has “Welcome” large. Small type says “Saturday at two, University Hall, enter by the main door.” Cover the small type and the corridor only sees welcome.", "Cover “Welcome” and the time and the hall appear. The sizes are reversed. Which side of the main door is the one extra that belongs in the small type."],
        },
        tasks: [
          { kind: "write", min: 8, prompt: { zh: "写下遮住小字之后，这张会堂海报还剩的字。按现在这版，不要改。", zhHant: "寫下遮住小字之後，這張會堂海報還剩的字。按現在這版，不要改。", en: "Write the words left when the small type is covered, on this version. Do not correct it yet." } },
          { kind: "write", min: 8, prompt: { zh: "把大字改成周六下午两点或大学会堂。再写小字里只留的那个补充：从正门进。", zhHant: "把大字改成週六下午兩點或大學會堂。再寫小字裡只留的那個補充：從正門進。", en: "Move Saturday at two or University Hall into the large type. Then write the one small-type extra: enter by the main door." } },
          { kind: "check", answer: 1, prompt: { zh: "遮住小字后，会堂海报应该还剩什么？", zhHant: "遮住小字後，會堂海報應該還剩什麼？", en: "After the small type is covered, what should remain?" }, options: [
            { zh: "只有欢迎", zhHant: "只有歡迎", en: "Only welcome" },
            { zh: "周六下午两点或大学会堂", zhHant: "週六下午兩點或大學會堂", en: "Saturday at two, or University Hall" },
            { zh: "从正门进的整段说明", zhHant: "從正門進的整段說明", en: "The whole note about the main door" },
          ] },
        ],
      },
      {
        title: { zh: "评语只收三个词", zhHant: "評語只收三個詞", en: "A critique accepts three words" },
        concept: {
          zh: ["海报拿去给人看，很容易收到「好看」「大气」「换个字体」。这些话没有指出改哪一组字。这一讲只收三个词：层次、可读、一个想法。", "记下的评语要能回到这张海报：一句你看见的事实，一句要改的。不能改的空话就放下。三个词是用来看这一张，不是用来谈审美。"],
          zhHant: ["海報拿去給人看，很容易收到「好看」「大氣」「換個字體」。這些話沒有指出改哪一組字。這一講只收三個詞：層次、可讀、一個想法。", "記下的評語要能回到這張海報：一句你看見的事實，一句要改的。不能改的空話就放下。三個詞是用來看這一張，不是用來談審美。"],
          en: ["Show a poster and you will hear nice, grander, try another typeface. None of that says which words to change. This lecture accepts three words: hierarchy, readable, one idea.", "The note has to come back to this poster: one fact you saw, one change. Set aside the sentence you cannot use. The three words look at this sheet, not at taste in general."],
        },
        case: {
          zh: ["同学看了会堂海报，说：「好看是好看，再大气一点，字体也可以换。」他没有说欢迎是不是还比两点大，也没有说正门那一行远看读不读得完。", "你只能把他的话收成这张海报上的两句。如果收不成，这句评语就不要进记录。"],
          zhHant: ["同學看了會堂海報，說：「好看是好看，再大氣一點，字體也可以換。」他沒有說歡迎是不是還比兩點大，也沒有說正門那一行遠看讀不讀得完。", "你只能把他的話收成這張海報上的兩句。如果收不成，這句評語就不要進記錄。"],
          en: ["A classmate looks at the hall poster and says: “It is nice, make it grander, and you could change the typeface.” He does not say whether welcome is still larger than two o’clock, or whether the main-door line can be read from the corridor.", "You may only turn his words into two lines about this poster. If you cannot, the comment does not go in the note."],
        },
        tasks: [
          { kind: "check", answer: 2, prompt: { zh: "同学那句「好看、大气、换字体」，哪一个词可以留下？", zhHant: "同學那句「好看、大氣、換字體」，哪一個詞可以留下？", en: "Of “nice, grander, change the typeface,” which word can stay?" }, options: [
            { zh: "好看", zhHant: "好看", en: "Nice" },
            { zh: "大气", zhHant: "大氣", en: "Grander" },
            { zh: "三个都不留，改问层次、可读、一个想法", zhHant: "三個都不留，改問層次、可讀、一個想法", en: "None of them; ask hierarchy, readable, one idea" },
          ] },
          { kind: "write", min: 12, prompt: { zh: "替这张会堂海报写两句评语：一句事实，一句要改的。要用到大字还是欢迎。", zhHant: "替這張會堂海報寫兩句評語：一句事實，一句要改的。要用到大字還是歡迎。", en: "Write two lines on this hall poster: one fact, one change. Mention whether the large type is still welcome." } },
          { kind: "write", min: 8, prompt: { zh: "用层次、可读、一个想法里的一个词，写你还会再看会堂海报的哪一处。", zhHant: "用層次、可讀、一個想法裡的一個詞，寫你還會再看會堂海報的哪一處。", en: "Using one of hierarchy, readable, or one idea, write the part of the hall poster you would look at again." } },
        ],
      },
    ],
  },
  anquan: {
    title: { zh: "守住自己的账号和交出去的页面", zhHant: "守住自己的帳號和交出去的頁面", en: "Keep the account, and the page you hand over" },
    lessons: [
      {
        title: { zh: "两只重要账号不要共用一把钥匙", zhHant: "兩隻重要帳號不要共用一把鑰匙", en: "Two accounts that matter do not share a key" },
        concept: {
          zh: ["安全这一讲只看你自己会用到的两只账号：收验证码的邮箱，和放作品或页面的那个账号。它们算重要，就各自有密码，并打开双重验证。", "一把钥匙开两扇门，其中一扇被看见，另一扇也开了。聊天记录不是放密码的地方。这一讲不去试别人的系统，只把自己的两只账号分开。"],
          zhHant: ["安全這一講只看你自己會用到的兩隻帳號：收驗證碼的郵箱，和放作品或頁面的那個帳號。它們算重要，就各自有密碼，並打開雙重驗證。", "一把鑰匙開兩扇門，其中一扇被看見，另一扇也開了。聊天記錄不是放密碼的地方。這一講不去試別人的系統，只把自己的兩隻帳號分開。"],
          en: ["This lecture looks only at two accounts you actually use: the email that receives codes, and the account that holds your work or your page. If they matter, each has its own password, and two-factor is on.", "One key for two doors means seeing one opens the other. A chat is not where a password sits. This lecture does not try anyone else’s system. It separates your two accounts."],
        },
        case: {
          zh: ["六楼失物页放在一个托管账号里。验证码发到楼长常用的那个邮箱。现在两只账号用的是同一串密码，双重验证都没开。密码还在楼组聊天的一条旧消息里。", "楼长如果只改页面上的字，这把钥匙还是开着两扇门。"],
          zhHant: ["六樓失物頁放在一個託管帳號裡。驗證碼發到樓長常用的那個郵箱。現在兩隻帳號用的是同一串密碼，雙重驗證都沒開。密碼還在樓組聊天的一條舊消息裡。", "樓長如果只改頁面上的字，這把鑰匙還是開著兩扇門。"],
          en: ["Floor Six Lost Property lives in a hosting account. Codes go to the email the floor lead uses every day. Both accounts share one password, and neither has two-factor. The password is still in an old message in the floor chat.", "If she only edits the words on the page, that key still opens both doors."],
        },
        tasks: [
          { kind: "write", min: 12, prompt: { zh: "写下这案例里的两只账号：哪只收验证码，哪只放着六楼失物页。", zhHant: "寫下這案例裡的兩隻帳號：哪隻收驗證碼，哪隻放著六樓失物頁。", en: "Name the two accounts in this case: which receives codes, and which holds the Floor Six page." } },
          { kind: "check", answer: 1, prompt: { zh: "楼长现在最该先做的是哪一件？", zhHant: "樓長現在最該先做的是哪一件？", en: "What should the floor lead do first?" }, options: [
            { zh: "只改页面上的标题", zhHant: "只改頁面上的標題", en: "Only change the title on the page" },
            { zh: "两只账号分开密码，并打开双重验证，聊天里的那条删掉", zhHant: "兩隻帳號分開密碼，並打開雙重驗證，聊天裡的那條刪掉", en: "Separate the passwords, turn on two-factor, and delete the chat line" },
            { zh: "把同一串密码再发给一位室友备份", zhHant: "把同一串密碼再發給一位室友備份", en: "Send the same password to a roommate as a backup" },
          ] },
          { kind: "write", min: 12, prompt: { zh: "写两行给楼长：邮箱改什么，托管账号改什么。不要写出那串密码。", zhHant: "寫兩行給樓長：郵箱改什麼，託管帳號改什麼。不要寫出那串密碼。", en: "Write two lines for her: what changes on the email, what changes on the host. Do not write the password." } },
        ],
      },
      {
        title: { zh: "验证码不离开你自己打开的页面", zhHant: "驗證碼不離開你自己打開的頁面", en: "A code does not leave the page you opened" },
        concept: {
          zh: ["验证码是这只账号暂时的钥匙。它只填进你自己打开的那个页面。别人来问，即使说得出你的名字、楼层和页面，也不构成你该念给他的理由。", "链接也一样。不确定是不是托管商或邮箱的那一页，就从收藏夹进去，或自己输入地址。不要顺着刚收到的那条消息点。"],
          zhHant: ["驗證碼是這隻帳號暫時的鑰匙。它只填進你自己打開的那個頁面。別人來問，即使說得出你的名字、樓層和頁面，也不構成你該念給他的理由。", "連結也一樣。不確定是不是託管商或郵箱的那一頁，就從收藏夾進去，或自己輸入地址。不要順著剛收到的那條消息點。"],
          en: ["A code is a temporary key to that account. It is typed only into a page you opened yourself. Someone who knows your name, your floor, and your page still has not earned the code read aloud.", "Links follow the same rule. If you are not sure it is the host or the email site, use a bookmark or type the address. Do not follow the message that just arrived."],
        },
        case: {
          zh: ["晚上有人给楼长发消息：「我是宿舍办公处的，六楼失物页要审核。把你邮箱刚收到的验证码念给我。」对方说得出她的名字，也说得出页面叫六楼失物。", "消息下面附了一条短链接，说点进去就能填验证码。楼长的收藏夹里本来就有邮箱和托管商的地址。"],
          zhHant: ["晚上有人給樓長發消息：「我是宿舍辦公處的，六樓失物頁要審核。把你郵箱剛收到的驗證碼念給我。」對方說得出她的名字，也說得出頁面叫六樓失物。", "消息下面附了一條短連結，說點進去就能填驗證碼。樓長的收藏夾裡本來就有郵箱和託管商的地址。"],
          en: ["At night someone messages the floor lead: “This is the hall office. Floor Six needs a review. Read me the code that just arrived in your email.” They know her name, and they know the page is called Floor Six.", "Under the message is a short link, supposedly where the code should be typed. Her bookmarks already have the email site and the host."],
        },
        tasks: [
          { kind: "write", min: 8, prompt: { zh: "写楼长回复这则消息的一句。要拒绝念出验证码。", zhHant: "寫樓長回覆這則消息的一句。要拒絕念出驗證碼。", en: "Write the sentence she sends back. It has to refuse to read the code aloud." } },
          { kind: "check", answer: 2, prompt: { zh: "她要填验证码时，从哪里打开页面？", zhHant: "她要填驗證碼時，從哪裡打開頁面？", en: "Where does she open the page before typing the code?" }, options: [
            { zh: "消息里的那条短链接", zhHant: "消息裡的那條短連結", en: "The short link in the message" },
            { zh: "先把验证码发给对方再决定", zhHant: "先把驗證碼發給對方再決定", en: "Send the code first, then decide" },
            { zh: "收藏夹里的邮箱或托管商", zhHant: "收藏夾裡的郵箱或託管商", en: "The email or the host, from her bookmarks" },
          ] },
          { kind: "write", min: 8, prompt: { zh: "写下她不该做的两件：一件关于念验证码，一件关于那条短链接。", zhHant: "寫下她不該做的兩件：一件關於念驗證碼，一件關於那條短連結。", en: "Write the two things she should not do: one about reading the code, one about the short link." } },
        ],
      },
      {
        title: { zh: "交出去的页面里不留钥匙", zhHant: "交出去的頁面裡不留鑰匙", en: "The page you hand over keeps no key" },
        concept: {
          zh: ["页面一旦给了地址，看到的人就不只是楼里的人。密钥、口令、数据库地址如果写在页面或公开的代码里，就和贴在门口一样。交出去之前要专门找这些，找到就移走，不贴到讨论里请人辨认。", "表单也只问这一页用得上的。六楼失物如果只要一句「我捡到了」和联系方式里的一个称呼，就不要再要证件号或住址。链接用 https。"],
          zhHant: ["頁面一旦給了地址，看到的人就不只是樓裡的人。密鑰、口令、資料庫地址如果寫在頁面或公開的代碼裡，就和貼在門口一樣。交出去之前要專門找這些，找到就移走，不貼到討論裡請人辨認。", "表單也只問這一頁用得上的。六樓失物如果只要一句「我撿到了」和聯繫方式裡的一個稱呼，就不要再要證件號或住址。連結用 https。"],
          en: ["Once a page has an address, the people who see it are not only the floor. A key, a password, or a database address in the page or in public code is the same as pinning it on the door. Look for these before you hand it over. Move them. Do not paste them into Discuss to ask what they are.", "A form asks only for what this page needs. If Floor Six only needs “I found it” and a name, it does not also ask for an ID number or an address. Links use https."],
        },
        case: {
          zh: ["六楼失物页准备把地址发给全楼。楼长翻源代码，在一段注释里看见托管数据库的口令，是当初试连接时留下的。页面上看不见，查看源代码能看见。", "表单现在除了称呼，还要求证件号。失物页并不需要证件号才能说「我捡到了黑伞」。"],
          zhHant: ["六樓失物頁準備把地址發給全樓。樓長翻源代碼，在一段註釋裡看見託管資料庫的口令，是當初試連接時留下的。頁面上看不見，查看源代碼能看見。", "表單現在除了稱呼，還要求證件號。失物頁並不需要證件號才能說「我撿到了黑傘」。"],
          en: ["The Floor Six address is about to go to the whole floor. In the source, inside a comment, the floor lead finds the hosting database password from an old test. It is invisible on the page and visible in the source.", "The form asks for an ID number as well as a name. The page does not need an ID number for someone to say they found the black umbrella."],
        },
        tasks: [
          { kind: "write", min: 8, prompt: { zh: "写下楼长在注释里看见了什么，以及她该把它移到哪里之外。不要把口令写出来。", zhHant: "寫下樓長在註釋裡看見了什麼，以及她該把它移到哪裡之外。不要把口令寫出來。", en: "Write what she found in the comment, and where it must not stay. Do not write the password." } },
          { kind: "check", answer: 0, prompt: { zh: "六楼失物的表单，不该再要哪一项？", zhHant: "六樓失物的表單，不該再要哪一項？", en: "What should the Floor Six form stop asking for?" }, options: [
            { zh: "证件号", zhHant: "證件號", en: "An ID number" },
            { zh: "一句我捡到了", zhHant: "一句我撿到了", en: "The line “I found it”" },
            { zh: "一个称呼", zhHant: "一個稱呼", en: "A name" },
          ] },
          { kind: "write", min: 16, prompt: { zh: "写楼长交地址之前的三行：双重验证、验证码、源代码里的口令。每行只写这一案例里要看的那一处。", zhHant: "寫樓長交地址之前的三行：雙重驗證、驗證碼、源代碼裡的口令。每行只寫這一案例裡要看的那一處。", en: "Write her three lines before she shares the address: two-factor, the code, and the password in the source. Each line names only what this case asks her to check." } },
        ],
      },
    ],
  },
};
