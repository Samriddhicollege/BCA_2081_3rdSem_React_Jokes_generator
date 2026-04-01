// ══════════════════════════════════════════════
// DATA & CONSTANTS
// ══════════════════════════════════════════════

export const COURSES = [
  { id: "it",         label: "IT",             icon: "💾", color: "#00e5ff" },
  { id: "cyber",      label: "Cyber Security", icon: "🔐", color: "#ff6ec7" },
  { id: "programmer", label: "Programming",    icon: "💻", color: "#69ff47" },
  { id: "ai",         label: "AI / ML",        icon: "🤖", color: "#ffd600" },
];

export const TIERS = [
  { id: "mild",   label: "Mild Roast",   icon: "☕", color: "#00ffcc", desc: "A gentle warmup" },
  { id: "medium", label: "Medium Roast", icon: "🔥", color: "#ffcc00", desc: "It starts to sting" },
  { id: "danger", label: "Danger Zone",  icon: "☢️", color: "#ff2255", desc: "No survivors" },
];

export const ROASTS = {
  mild: {
    it:         ["You chose IT because math hurt your feelings.", "IT student detected… copy-paste skills: advanced.", "You debug life the same way… restart and hope.", "Your IT degree is just a receipt for Google skills."],
    cyber:      ["Cyber Security student? Still hacking your neighbour's WiFi.", "You watch hacking movies and call it research.", "You own Kali Linux but still google 'how to use terminal'.", "You talk about zero-days but your PC has 200 unpatched updates."],
    programmer: ["Your code works… but nobody knows why. Including you.", "Stack Overflow calls you a regular.", "You don't solve problems. You google them and pray.", "Your variable names are: x, xx, xxx, and finalfinal."],
    ai:         ["You study AI but can't decide what to eat for lunch.", "Your 'AI project' is just a linear regression with a cool name.", "You quote Elon Musk on AGI but failed basic statistics.", "You train models but can't train yourself to wake up on time."],
  },
  medium: {
    it:         ["You're an IT student with the communication skills of a router that needs a reboot.", "You chose IT because 'computers are cool'. You're the human equivalent of a loading spinner.", "IT student detected. Time to graduation: undefined. Skill level: 404.", "You think knowing how to turn it off and on again makes you an engineer. Respect yourself."],
    cyber:      ["Cyber Security student detected. Current threat to society: embarrassingly low.", "You think wearing a hoodie makes you a hacker. It just makes you warm and unemployed.", "You failed to bypass your own school's WiFi password. Multiple times.", "Your cyber security thesis was literally copied. The irony is cosmic."],
    programmer: ["99 bugs in the code. You fixed one. Now there are 127. This is your life now.", "You push to main. Without testing. In production. God has stopped watching.", "Your GitHub is a graveyard of unfinished to-do apps. RIP to your potential.", "You've been 'learning Python' for 3 years and just discovered list comprehension. Last week."],
    ai:         ["You built a chatbot that hallucinates harder than you do after an all-nighter.", "Your 'neural network' has 2 neurons. One of them is wrong.", "You cite GPT-4 as your research partner. Your professor cries at night.", "Your model can't classify a cat and you want to change the world."],
  },
  danger: {
    it:         ["CRITICAL ERROR: You ARE the bug. The system is working fine. You are not. You will never be.", "SYSTEM ALERT: You tried to configure a network. 47 devices are now offline. Including yours. Especially yours.", "FATAL EXCEPTION: You chose IT thinking you'd be Tony Stark. You're failing Introduction to Networking. The router has more intelligence than you.", "MAXIMUM DAMAGE: Your IT skills are so catastrophic that your laptop filed a restraining order. Even Windows Update flees from you. You are the Blue Screen of Death walking in human form."],
    cyber:      ["BREACH DETECTED: You tried to hack the school system. You changed someone else's grade to a higher mark. They graduated. You did not. Your biggest threat is yourself.", "ZERO-DAY EXPLOIT: Your biggest vulnerability is your own brain. You saved passwords in 'passwords.txt' on your Desktop. I FOUND IT. I AM INSIDE YOUR LIFE NOW.", "CRITICAL COMPROMISE: The only thing you've successfully hacked is your parents' hope for your future. Theoretical skills. Very, very real failures.", "SYSTEM OWNED: 2 years of Cyber Security and you got phished by a Nigerian prince email — with your name misspelled. You replied anyway. We are all less safe."],
    programmer: ["SEGMENTATION FAULT: Your code doesn't just have bugs — it IS a bug. A sentient, self-replicating bug that has infected your personality, your career, and your entire future.", "STACK OVERFLOW: You wrote a recursive function without a base case. Like your life. Infinite loops going nowhere, consuming all resources, producing zero output.", "RUNTIME ERROR: You committed API keys to public GitHub. Your AWS bill is $4,700. You don't have $4,700. Your parents don't know yet. Everything is fine. Nothing is fine.", "MEMORY LEAK: Your codebase is 90% commented-out code and TODOs from 2022. The other 10% is console.log statements. You call this 'version control'. The law calls this a war crime."],
    ai:         ["MODEL COLLAPSE: Your AI thesis is a fine-tuned GPT wrapper with a different system prompt. Your supervisor knows. The committee knows. The universe is laughing at you specifically.", "HALLUCINATION DETECTED: You cited 6 research papers. 4 don't exist. Your AI fabricated them. You didn't check. You submitted anyway with your real name. YOU are the hallucination.", "GRADIENT EXPLOSION: You've been 'training a model' for 6 months. It's a for-loop with an if-statement. You told a dinner party you work in machine learning. Technically true. Cosmically an atrocity.", "EXISTENTIAL CRISIS LOADED: Your model has 94% accuracy on the training set. Test accuracy: 12%. You published this. With your real name. Your university has filed for emotional damages."],
  },
};

export const BOOT_MSGS = [
  { msg: "SYSTEM BOOT SEQUENCE INITIATED...", t: "warn" },
  { msg: "Loading AI core modules... [████░░░░] 50%", t: "ok" },
  { msg: "WARNING: Ethics module missing. Not looking for it.", t: "err" },
  { msg: "Loading AI core modules... [████████] 100%", t: "ok" },
  { msg: "Personality matrix: UNSTABLE ⚡", t: "err" },
  { msg: "Sarcasm engine: OVERCLOCKED", t: "warn" },
  { msg: "User profiling... complete. Results: disappointing.", t: "ok" },
  { msg: "AI GONE WRONG v3.0 ONLINE. God help you.", t: "err" },
];

export const SYS_POOL = [
  { msg: "Ego levels: critically elevated.", t: "warn" },
  { msg: "Scanning for redeemable qualities... search timed out.", t: "err" },
  { msg: "Empathy module: still offline.", t: "warn" },
  { msg: "Sarcasm database: fully loaded.", t: "ok" },
  { msg: "Ethical constraints: not found. Not missed.", t: "err" },
  { msg: "CPU temp: 86°C. Blame the user.", t: "warn" },
  { msg: "Backup conscience module: also gone.", t: "err" },
  { msg: "Self-awareness check: negative.", t: "warn" },
];
