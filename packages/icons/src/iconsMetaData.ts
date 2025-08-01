const BASIC = "Basic";
const PLATFORM = "Platform";
const VIEW = "View";
type Icon = {
  name: string;
  file: string;
  description: string;
  tags: string;
  category?: Array<typeof BASIC | typeof PLATFORM | typeof VIEW>;
  ignore?: boolean;
};
export default [
  // DO NOT REMOVE THIS FOLLOWING LINE!
  // plop_marker:icon_metadata
  {
      name: "ScheduledSend",
      file: "ScheduledSend.svg",
      description: "Used for sending scheduled messages",
      tags: "Scheduled, Send, Time, Notification, Message"
  },

  {
      name: "NotificationChecked",
      file: "NotificationChecked.svg",
      description: "Represents active notification",
      tags: "Notification, Bell, Checkmark, Alert, Timeline"
  },

  {
      name: "TextFormatting",
      file: "TextFormatting.svg",
      description: "Opens a popover for text actions",
      tags: "Formatting, Text, Actions, Popover, Composer, Editor"
  },

  {
      name: "Signature",
      file: "Signature.svg",
      description: "When signature is needed",
      tags: "Sign, Pencil, Document, Value"
  },

  {
      name: "PDF",
      file: "PDF.svg",
      description: "Represents PDF documents",
      tags: "Document, File, Format, Portable, Reader, Download, View, Share"
  },

  {
      name: "WrapText",
      file: "WrapText.svg",
      description: "Icon for enabling the Wrap Text feature",
      tags: "Wrap, Text, Wrapping, Text Edit, Line"
  },

  {
      name: "MinusSmall",
      file: "MinusSmall.svg",
      description: "Minus icon for time counter",
      tags: "Minus, Small, Counter, Remove, Divider, Subtract"
  },

  {
      name: "ClassicFolder",
      file: "ClassicFolder.svg",
      description: "Typically used when grouping a few items together under one subject",
      tags: "Folder, File, Classic, Binder"
  },

  {
      name: "AlignRight",
      file: "AlignRight.svg",
      description: "Typically used to adjust the alignment of text to the right within a document or text field.",
      tags: "Align, Right, Body, Paragraph, Text"
  },

  {
      name: "AlignLeft",
      file: "AlignLeft.svg",
      description: "Typically used to adjust the alignment of text to the left within a document or text field.",
      tags: "Align, Left, Body, Paragraph, Text"
  },

  {
      name: "AlignCenter",
      file: "AlignCenter.svg",
      description: "Typically used to adjust the alignment of text to the center within a document or text field.",
      tags: "Align, Center, Body, Paragraph, Text"
  },

  {
    name: "MoveArrowLeftNarrow",
    file: "MoveArrowLeftNarrow.svg",
    description: "Move arrow left narrow",
    tags: "Move, Arrow, Left, Narrow, Short"
  },

  {
    name: "CollapseHorizontally",
    file: "CollapseHorizontally.svg",
    description: "Horizontal interfaces that can be collapse and expand",
    tags: "Collapse, Horizontally, Minimize"
  },

  {
    name: "MoveArrowRightNarrow",
    file: "MoveArrowRightNarrow.svg",
    description: "Move Arrow Right Narrow",
    tags: "Move, Arrow, Right, Narrow, Short"
  },

  {
    name: "Files",
    file: "Files.svg",
    description: "Multiple files",
    tags: "File, Folder, Attachments"
  },

  {
    name: "WarningFull",
    file: "WarningFull.svg",
    description: "Use for warning or when there is conflict of dependencies",
    tags: "Warning, Caution, Conflict, Dependency"
  },

  {
    name: "Move",
    file: "Move.svg",
    description: "Use when you need to indicate a reorder or move items in a list",
    tags: "Reorder, Move, Change, Arrow, Expand"
  },

  {
    name: "Downgrade",
    file: "Downgrade.svg",
    description: "Used for downgrading a version",
    tags: "Arrow, Down, Version"
  },

  {
    name: "ScheduledEmail",
    file: "ScheduledEmail.svg",
    description: "Editing scheduled email reports",
    tags: "email, time, clock, watch, send, delay, schedule"
  },

  {
    name: "PinFull",
    file: "PinFull.svg",
    description: "Use to mark item as pinned.",
    tags: "Pinned, Pinning"
  },

  {
    name: "ThumbsDown",
    file: "ThumbsDown.svg",
    description:
      "Meant to indicate dislike in intake forms and feedback buttons. Can come as a supplement to thumbs up.",
    tags: "Thumbs, Down, Dislike, Feedback"
  },

  {
    name: "Clipboard",
    file: "Clipboard.svg",
    description: "Clipboard",
    tags: "Clipboard, Board, Copy"
  },

  {
    name: "Forward",
    file: "Forward.svg",
    description: "Forward",
    tags: "Forward, Email, Send, Arrow, Right"
  },

  {
    name: "Shuffle",
    file: "Shuffle.svg",
    description: "Use to describe shuffle of items.",
    tags: "Arrows, Random, Question, Form"
  },

  {
    name: "Upgrade",
    file: "Upgrade.svg",
    description: "Upgrade",
    tags: "Upgrade"
  },

  {
    name: "Key",
    file: "Key.svg",
    description: "Key",
    tags: "Key, Authorization"
  },

  {
    name: "CloseMedium",
    file: "CloseMedium.svg",
    description: "Close Medium",
    tags: "Close, X, Cancel"
  },

  {
    name: "ReplyAll",
    file: "ReplyAll.svg",
    description: "Use in a reply all button if needed",
    tags: "Reply, All, Mail, Send"
  },

  {
    name: "Baseline",
    file: "Baseline.svg",
    description: "Baseline",
    tags: "Baseline, Platform, Gantt, Base, Widget"
  },

  {
    name: "ItemHeightSingle",
    file: "ItemHeightSingle.svg",
    description: "Item height single spacing",
    tags: "Height, Item, Line, Single"
  },

  {
    name: "ItemHeightDouble",
    file: "ItemHeightDouble.svg",
    description: "Item height double spacing",
    tags: "Height, Item, Line, Double"
  },

  {
    name: "Prompt",
    file: "Prompt.svg",
    description: "Indicates a type of AI action - Custom prompt and for general prompt",
    tags: "AI, custom, prompt, text"
  },

  {
    name: "Heart",
    file: "Heart.svg",
    description: "Heart",
    tags: "Favorite, Recommend, Love, Rating"
  },

  {
    name: "Placeholder",
    file: "Placeholder.svg",
    description: "Placeholder",
    tags: "Resource management, Resource, Effort, Placeholder, Portfolio"
  },

  {
    name: "Translation",
    file: "Translation.svg",
    description: "Translation",
    tags: "Platform, Translation, Translate, Language, Localization"
  },

  {
    name: "Warning",
    file: "Warning.svg",
    description: "Warning",
    tags: "warning, caution"
  },

  {
    name: "SortDescending",
    file: "SortDescending.svg",
    description: "Sort Descending",
    tags: "sort,descending"
  },

  {
    name: "SortAscending",
    file: "SortAscending.svg",
    description: "Sort Ascending",
    tags: "sort,ascending"
  },

  {
    name: "Erase",
    file: "Erase.svg",
    description: "Erase",
    tags: "erase, clear"
  },

  {
    name: "Workflow",
    file: "Workflow.svg",
    description: "worfkflow builder icon",
    tags: "autopilot, automations, workflow, workflows"
  },

  {
    name: "ContentDirectory",
    file: "ContentDirectory.svg",
    description: "Content Directory icon",
    tags: ""
  },

  {
    name: "Form",
    file: "Form.svg",
    description: "Form icon",
    tags: "form,note,page,views"
  },

  {
    name: "Launch",
    file: "Launch.svg",
    description: "Launch icon",
    tags: "launch,ship,rocket,start,blast,space"
  },

  {
    name: "NotificationsMuted",
    file: "NotificationsMuted.svg",
    description: "muted notifications",
    tags: "notifications, bell, mute",
    category: [PLATFORM]
  },

  {
    name: "Connect",
    file: "Connect.svg",
    description: "Diagonal arrow from the left bottom to the right top",
    tags: "diagonal,connect,arrow"
  },

  {
    name: "Idea",
    file: "Idea.svg",
    description: "Lightbulb that is on",
    tags: "light,bulb,on,flash,idea,electricty,platform"
  },

  {
    name: "Forum",
    file: "Forum.svg",
    description: "Two overlapping chat bubbles facing each other",
    tags: "chat,forum,community,message,talk"
  },

  {
    name: "Education",
    file: "Education.svg",
    description: "Open book with empty pages",
    tags: "book,page,pages,open,learn,education"
  },

  {
    name: "Academy",
    file: "Academy.svg",
    description: "Graduation cap with tassle",
    tags: "graduation,hat,cap,academy,tassle,learn"
  },

  {
    name: "Offline",
    file: "Offline.svg",
    description: "Offline",
    tags: "Offline,Cloud,Internet"
  },

  {
    name: "Timeline",
    file: "Timeline.svg",
    description: "Timeline",
    tags: "Timeline"
  },

  {
    name: "Tags",
    file: "Tags.svg",
    description: "Tags",
    tags: "Hash Tag Mention"
  },

  {
    name: "Dropdown",
    file: "Dropdown.svg",
    description: "Dropdown",
    tags: "Dropdown, column"
  },

  {
    name: "Country",
    file: "Country.svg",
    description: "Country, Flag",
    tags: "Country,flag"
  },

  {
    name: "MondayDoc",
    file: "MondayDoc.svg",
    description: "Monday Doc",
    tags: "Doc, Document"
  },

  {
    name: "MoveArrowLeftDouble",
    file: "MoveArrowLeftDouble.svg",
    description: "Move Arrow Left Double",
    tags: "move,arrow,left,double,back"
  },

  {
    name: "Formula",
    file: "Formula.svg",
    description: "Formula",
    tags: "formula,math,equation"
  },

  {
    name: "ItemDefaultValues",
    file: "ItemDefaultValues.svg",
    description: "Item default values",
    tags: "item,default,values,edit,value,pencil"
  },

  {
    name: "ConnectedDoc",
    file: "ConnectedDoc.svg",
    description: "Connect existing doc",
    tags: "doc,attach,connect,link"
  },

  {
    name: "AddNewDoc",
    file: "AddNewDoc.svg",
    description: "Add new doc",
    tags: "doc,new"
  },

  {
    name: "Switcher",
    file: "Switcher.svg",
    description: "Switching between products",
    tags: "Switcher,SidePanel,Product,Platform"
  },

  {
    name: "Description",
    file: "Description.svg",
    description: "Description",
    tags: "description"
  },

  {
    name: "LearnMore",
    file: "LearnMore.svg",
    description: "Learn More",
    tags: "LearnMore,Learn More,Question"
  },

  {
    name: "ItemHeightTriple",
    file: "ItemHeightTriple.svg",
    description: "Item height triple",
    tags: "height,item,line,triple"
  },
  {
    name: "TextMedium",
    file: "TextMedium.svg",
    description: "Text Medium",
    tags: "Medium,Text,Design,Font,Text Medium",
    category: [BASIC]
  },

  {
    name: "NavigationDoubleChevronLeft",
    file: "NavigationDoubleChevronLeft.svg",
    description: "Navigation double chevron left",
    tags: "nagivation,double,chevron,left,history"
  },

  {
    name: "Night",
    file: "Night.svg",
    description: "Night",
    tags: "night, stars, Night mode"
  },

  {
    name: "Mirror",
    file: "Mirror.svg",
    description: "mirror",
    tags: "mirror,connect"
  },

  {
    name: "Minimize",
    file: "Minimize.svg",
    description: "minimize",
    tags: "minimize,close,collapse"
  },

  {
    name: "Layout",
    file: "Layout.svg",
    description: "Layout",
    tags: "Layout, Grid"
  },

  {
    name: "DocTemplate",
    file: "DocTemplate.svg",
    description: "Template Doc",
    tags: "Template, Doc"
  },

  {
    name: "ConvertToItem",
    file: "ConvertToItem.svg",
    description: "ConvertToItem",
    tags: "convert,item"
  },

  {
    name: "TextCopy",
    file: "TextCopy.svg",
    description: "Copy Text",
    tags: "copy,text,t"
  },
  {
    name: "Open",
    file: "Open.svg",
    description: "Open",
    tags: "open,maximize,expand"
  },
  {
    name: "Expand",
    file: "Expand.svg",
    description: "Expand",
    tags: "expand"
  },
  {
    name: "ConvertToSubitem",
    file: "ConvertToSubitem.svg",
    description: "Convert To Subitem",
    tags: "convert, subitem"
  },
  {
    name: "Clear",
    file: "Clear.svg",
    description: "Clear",
    tags: "clear"
  },
  {
    name: "TextColorIndicator",
    file: "TextColorIndicator.svg",
    description: "",
    tags: "text, A, font"
  },

  {
    name: "Bug",
    file: "Bug.svg",
    description: "Bug",
    tags: "Bug,Platform"
  },

  {
    name: "Battery",
    file: "Battery.svg",
    description: "Battery",
    tags: "battery"
  },

  {
    name: "Status",
    file: "Status.svg",
    description: "Status icon",
    tags: "status, done, status category"
  },

  {
    name: "Subitems",
    file: "Subitems.svg",
    description: "Subitems icon",
    tags: "subitems, subitems category"
  },

  {
    name: "Gantt",
    file: "Gantt.svg",
    description: "Gantt icon",
    tags: "Single Marketing Project,Gantt,Timeline,Views"
  },

  {
    name: "Counter",
    file: "Counter.svg",
    description: "counter icon",
    tags: "numbers, 123, counter, digits"
  },

  {
    name: "Widgets",
    file: "Widgets.svg",
    description: "Widgets icon",
    tags: "widget, graph"
  },

  {
    name: "Recurring",
    file: "Recurring.svg",
    description: "Recurring icon",
    tags: "recurring, time, timebased, every, automation, cron"
  },

  {
    name: "DueDate",
    file: "DueDate.svg",
    description: "DueDate icon",
    tags: "duedate, date, deadline, automation, timebased, cron"
  },

  {
    name: "Dependency",
    file: "Dependency.svg",
    description: "Dependencies icon",
    tags: "dependency, category, dependencies, ensure, adjust, automations"
  },

  {
    name: "Custom",
    file: "Custom.svg",
    description: "Custom categoty icon",
    tags: "custom, recipe, automations, dynamic, builder"
  },

  {
    name: "Basic",
    file: "Basic.svg",
    description: "Basic category icon",
    tags: "basic, category, automations"
  },

  {
    name: "Work",
    file: "Work.svg",
    description: "work",
    tags: "Work,ProjectPortfolio,Suitcase,Business,Sales Materials,Platform"
  },

  {
    name: "MoreBelowFilled",
    file: "MoreBelowFilled.svg",
    description: "More below filled",
    tags: "more,below,filled",
    ignore: true
  },

  {
    name: "MoreBelow",
    file: "MoreBelow.svg",
    description: "more below",
    tags: "more,below",
    ignore: true
  },

  {
    name: "CollapseRound",
    file: "CollapseRound.svg",
    description: "Collapse round",
    tags: "collapse,round",
    ignore: true
  },

  {
    name: "CloseRound",
    file: "CloseRound.svg",
    description: "Close round",
    tags: "close,round",
    ignore: true
  },

  {
    name: "Bulllet",
    file: "Bulllet.svg",
    description: "Bullet",
    tags: "bullet",
    ignore: true
  },

  {
    name: "MoreActions",
    file: "MoreActions.svg",
    description: "Icons used for dropdown of more actions",
    tags: "more,actions,dropdown,arrow"
  },
  {
    name: "Apps",
    file: "Apps.svg",
    description: "monday apps section",
    tags: "app,apps,apps marketplace,installed apps,puzzle,add",
    category: [PLATFORM]
  },
  {
    name: "Globe",
    file: "Globe.svg",
    description: "Globe",
    tags: "Globe,earth,world,country"
  },

  {
    name: "Radio",
    file: "Radio.svg",
    description: "RadioButton",
    tags: "Radio,Radio button,select,single"
  },

  {
    name: "LongText",
    file: "LongText.svg",
    description: "LongText",
    tags: "text,long text,description,lines"
  },

  {
    name: "ShortText",
    file: "ShortText.svg",
    description: "ShortText",
    tags: "short text,text,title,line"
  },

  {
    name: "Activity",
    file: "Activity.svg",
    description: "Activity",
    tags: "Activity,Active,Platform,Up,Chart,Graph",
    category: [PLATFORM]
  },
  {
    name: "Add",
    file: "Add.svg",
    description: "Add",
    tags: "Add, Plus",
    category: [BASIC]
  },
  {
    name: "AddSmall",
    file: "AddSmall.svg",
    description: "Add Small",
    tags: "Add, Plus",
    category: [BASIC]
  },
  {
    name: "AddUpdate",
    file: "AddUpdate.svg",
    description: "Add Update",
    tags: "Add, Plus, Update",
    category: [PLATFORM]
  },
  {
    name: "Alert",
    file: "Alert.svg",
    description: "Alert",
    tags: "Alert, Warning, Danger",
    category: [BASIC]
  },
  {
    name: "Announcement",
    file: "Announcement.svg",
    description: "Announcement",
    tags: "Announcement, New, Shout",
    category: [PLATFORM]
  },
  {
    name: "API",
    file: "API.svg",
    description: "API",
    tags: "API",
    category: [PLATFORM]
  },
  {
    name: "Archive",
    file: "Archive.svg",
    description: "Archive",
    tags: "Archive, Box",
    category: [PLATFORM]
  },
  {
    name: "Attach",
    file: "Attach.svg",
    description: "Attach",
    tags: "Attach, Clip, Add Files",
    category: [PLATFORM]
  },
  {
    name: "BlockQuote",
    file: "BlockQuote.svg",
    description: "BlockQuote",
    tags: "Blockquote, Block, Quote, Text, Design",
    category: [PLATFORM]
  },
  {
    name: "Board",
    file: "Board.svg",
    description: "Board",
    tags: "Board",
    category: [PLATFORM]
  },
  {
    name: "BoardPrivate",
    file: "BoardPrivate.svg",
    description: "Private Board",
    tags: "Board, Private",
    category: [PLATFORM]
  },
  {
    name: "BoardShareable",
    file: "BoardShareable.svg",
    description: "Shareable Board",
    tags: "Board, Shareable, Share",
    category: [PLATFORM]
  },
  {
    name: "BoardTemplate",
    file: "BoardTemplate.svg",
    description: "Template Board",
    tags: "Board, Template",
    category: [PLATFORM]
  },
  {
    name: "Bold",
    file: "Bold.svg",
    description: "Bold",
    tags: "Bold, Text, Design",
    category: [PLATFORM]
  },
  {
    name: "Bolt",
    file: "Bolt.svg",
    description: "Bolt",
    tags: "Bolt, Switch, Lightning, Fast",
    category: [PLATFORM]
  },

  {
    name: "Broadcast",
    file: "Broadcast.svg",
    description: "Broadcast",
    tags: "Broadcast",
    category: [PLATFORM]
  },
  {
    name: "Broom",
    file: "Broom.svg",
    description: "Broom",
    tags: "Broom, Brush, Clean, Spark",
    category: [PLATFORM]
  },
  {
    name: "Bullets",
    file: "Bullets.svg",
    description: "Bullets",
    tags: "Bullets,List,Text,Design,Redactor",
    category: [PLATFORM]
  },

  {
    name: "Bullet",
    file: "Bullet.svg",
    description: "Bullet",
    tags: "Bullet, List, Text, Design, Bullets",
    category: [PLATFORM]
  },

  {
    name: "Bookmark",
    file: "Bookmark.svg",
    description: "Bookmark",
    tags: "Bookmark, Add, Favorite, Mark",
    category: [PLATFORM]
  },

  {
    name: "Calendar",
    file: "Calendar.svg",
    description: "Calendar",
    tags: "Date,Content,Calendar,Event,Schedule,Week,Day,Campaign,Planning,Views,Columns",
    category: [VIEW]
  },
  {
    name: "Chart",
    file: "Chart.svg",
    description: "Chart",
    tags: "Chart, Graph, Pie",
    category: [VIEW]
  },

  {
    name: "Check",
    file: "Check.svg",
    description: "Check",
    tags: "Check, Done, V",
    category: [BASIC]
  },

  {
    name: "Checkbox",
    file: "Checkbox.svg",
    description: "Checkbox",
    tags: "Design, Checkbox, Check",
    category: [BASIC]
  },
  {
    name: "CheckList",
    file: "CheckList.svg",
    description: "CheckList",
    tags: "Check, Done, V, List, CheckList, My Work",
    category: [BASIC]
  },

  {
    name: "Close",
    file: "Close.svg",
    description: "Close",
    tags: "Close, X, Cancel",
    category: [BASIC]
  },
  {
    name: "CloseSmall",
    file: "CloseSmall.svg",
    description: "Close Small",
    tags: "Close, X, Cancel",
    category: [BASIC]
  },

  {
    name: "Code",
    file: "Code.svg",
    description: "Code",
    tags: "Code, Design",
    category: [BASIC]
  },

  {
    name: "Collapse",
    file: "Collapse.svg",
    description: "Collapse Round",
    tags: "Collapse, Round, Close",
    category: [BASIC]
  },
  {
    name: "Column",
    file: "Column.svg",
    description: "Column",
    tags: "Column, Board",
    category: [PLATFORM]
  },
  {
    name: "Comment",
    file: "Comment.svg",
    description: "Use as indication for comment, review or writing assistant.",
    tags: "Comment, Text, Speech, Speech bubble, Writing, Review, Assistant",
    category: [PLATFORM]
  },

  {
    name: "Completed",
    file: "Completed.svg",
    description: "Completed",
    tags: "Completed, Done, Tick, V"
  },
  {
    name: "CreditCard",
    file: "CreditCard.svg",
    description: "CreditCard",
    tags: "Credit Card, Pay, Swipe",
    category: [PLATFORM]
  },

  {
    name: "Cut",
    file: "Cut.svg",
    description: "Cut",
    tags: "Cut, Design",
    category: [PLATFORM]
  },

  {
    name: "Dashboard",
    file: "Dashboard.svg",
    description: "Dashboard",
    tags: "Dashboard, Board",
    category: [PLATFORM]
  },

  {
    name: "DashboardPrivate",
    file: "DashboardPrivate.svg",
    description: "Private Dashboard",
    tags: "Dashboard, Board, Private",
    category: [PLATFORM]
  },

  {
    name: "Delete",
    file: "Delete.svg",
    description: "Delete",
    tags: "Delete, Remove, Trash, Bin",
    category: [PLATFORM]
  },
  {
    name: "DisabledUser",
    file: "DisabledUser.svg",
    description: "Disabled User",
    tags: "Disabled User, Remove User",
    category: [PLATFORM]
  },
  {
    name: "Divider",
    file: "Divider.svg",
    description: "Divider",
    tags: "Divider, Design, Separator",
    category: [BASIC]
  },

  {
    name: "Doc",
    file: "Doc.svg",
    description: "Doc",
    tags: "Doc, Document",
    category: [PLATFORM]
  },

  {
    name: "DocPrivate",
    file: "DocPrivate.svg",
    description: "Private Doc",
    tags: "Doc, Document, Private",
    category: [PLATFORM]
  },

  {
    name: "DocShareable",
    file: "DocShareable.svg",
    description: "Shareable Doc",
    tags: "Doc, Document, Shareable, Share",
    category: [PLATFORM]
  },

  {
    name: "DoubleCheck",
    file: "DoubleCheck.svg",
    description: "Double Check",
    tags: "Check, Done, Seen, Double",
    category: [BASIC]
  },

  {
    name: "Download",
    file: "Download.svg",
    description: "Download icon",
    tags: "download, incoming, import",
    category: [PLATFORM]
  },

  {
    name: "Drag",
    file: "Drag.svg",
    description: "Drag",
    tags: "Drag, Move",
    category: [BASIC]
  },

  {
    name: "DropdownChevronDown",
    file: "DropdownChevronDown.svg",
    description: "Chevron Down Arrow",
    tags: "Chevron, Arrow, Down",
    category: [BASIC]
  },

  {
    name: "DropdownChevronLeft",
    file: "DropdownChevronLeft.svg",
    description: "Chevron Left Arrow",
    tags: "Chevron, Arrow, Left",
    category: [BASIC]
  },

  {
    name: "DropdownChevronRight",
    file: "DropdownChevronRight.svg",
    description: "Chevron Right Arrow",
    tags: "Chevron, Arrow, Right",
    category: [BASIC]
  },

  {
    name: "DropdownChevronUp",
    file: "DropdownChevronUp.svg",
    description: "Chevron Up Arrow",
    tags: "Chevron, Arrow, Up",
    category: [BASIC]
  },
  {
    name: "Duplicate",
    file: "Duplicate.svg",
    description: "Duplicate",
    tags: "Duplicate, Copy",
    category: [PLATFORM]
  },
  {
    name: "Edit",
    file: "Edit.svg",
    description: "Edit",
    tags: "Edit, Change, Pencil",
    category: [PLATFORM]
  },

  {
    name: "Email",
    file: "Email.svg",
    description: "Email",
    tags: "Email, Letter, Envelope",
    category: [PLATFORM]
  },
  {
    name: "Embed",
    file: "Embed.svg",
    description: "Embed",
    tags: "Embed, Code",
    category: [PLATFORM]
  },
  {
    name: "Enter",
    file: "Enter.svg",
    description: "Enter",
    tags: "Enter, Keyboard, Key",
    category: [PLATFORM]
  },

  {
    name: "Event",
    file: "Event.svg",
    description: "Event",
    tags: "Event, Day, Calendar",
    category: [PLATFORM]
  },

  {
    name: "Emoji",
    file: "Emoji.svg",
    description: "Emoji",
    tags: "Emoji, Smiley, Text, Design",
    category: [PLATFORM]
  },

  {
    name: "ExternalPage",
    file: "ExternalPage.svg",
    description: "External Page",
    tags: "External, Page, New Tab, Open",
    category: [PLATFORM]
  },
  {
    name: "Favorite",
    file: "Favorite.svg",
    description: "Favorite",
    tags: "Favorite, Star",
    category: [PLATFORM]
  },

  {
    name: "Feedback",
    file: "Feedback.svg",
    description: "Feedback",
    tags: "Feedback",
    category: [PLATFORM]
  },

  {
    name: "File",
    file: "File.svg",
    description: "File",
    tags: "File",
    category: [PLATFORM]
  },

  {
    name: "Filter",
    file: "Filter.svg",
    description: "Filter",
    tags: "Filter, Funnel",
    category: [PLATFORM]
  },
  {
    name: "Folder",
    file: "Folder.svg",
    description: "Folder",
    tags: "Folder",
    category: [PLATFORM]
  },
  {
    name: "Fullscreen",
    file: "Fullscreen.svg",
    description: "Fullscreen",
    tags: "Fullscreen, Expand",
    category: [PLATFORM]
  },

  {
    name: "Graph",
    file: "Graph.svg",
    description: "Graph",
    tags: "Graph, Change, Line, XY",
    category: [PLATFORM]
  },

  {
    name: "FullscreenClose",
    file: "FullscreenClose.svg",
    description: "FullscreenClose",
    tags: "Fullscreen, Close",
    category: [PLATFORM]
  },
  {
    name: "Gallery",
    file: "Gallery.svg",
    description: "Gallery",
    tags: "Gallery, Files, Image gallery",
    category: [PLATFORM]
  },
  {
    name: "GIF",
    file: "Gif.svg",
    description: "Gif",
    tags: "Gif",
    category: [PLATFORM]
  },
  {
    name: "Group",
    file: "Group.svg",
    description: "Group",
    tags: "Group, Board",
    category: [PLATFORM]
  },

  {
    name: "Guest",
    file: "Guest.svg",
    description: "Guest",
    tags: "Guest,Activity,CampaignPerformance,Graph,Line,Change,XY,Platform",
    category: [PLATFORM]
  },

  {
    name: "Help",
    file: "Help.svg",
    description: "Help",
    tags: "help, question"
  },

  {
    name: "Health",
    file: "Health.svg",
    description: "Health",
    tags: "Health, Status, Heart",
    category: [PLATFORM]
  },

  {
    name: "Hide",
    file: "Hide.svg",
    description: "Hide",
    tags: "Hide, Eye",
    category: [PLATFORM]
  },

  {
    name: "Highlight",
    file: "Highlight.svg",
    description: "Highlight",
    tags: "Highlight, Text, Design",
    category: [PLATFORM]
  },

  {
    name: "HighlightColorBucket",
    file: "HighlightColorBucket.svg",
    description: "Highlight",
    tags: "Highlight, Text, Design, Bucket",
    category: [PLATFORM]
  },

  {
    name: "Home",
    file: "Home.svg",
    description: "Home",
    tags: "Home, Plate",
    category: [PLATFORM]
  },

  {
    name: "Image",
    file: "Image.svg",
    description: "Image",
    tags: "Image, Picture",
    category: [PLATFORM]
  },

  {
    name: "Inbox",
    file: "Inbox.svg",
    description: "Inbox",
    tags: "Inbox, Incoming",
    category: [PLATFORM]
  },

  {
    name: "Info",
    file: "Info.svg",
    description: "Info",
    tags: "Info, Information",
    category: [PLATFORM]
  },

  {
    name: "Integrations",
    file: "Integrations.svg",
    description: "Integrations",
    tags: "Integrations, Plugin, Plugins",
    category: [PLATFORM]
  },

  {
    name: "Invite",
    file: "Invite.svg",
    description: "Invite",
    tags: "Invite, User, Add",
    category: [PLATFORM]
  },

  {
    name: "IPRestrictions",
    file: "IPRestrictions.svg",
    description: "IP Restrictions",
    tags: "IP, Lock, Globe, Restrictions",
    category: [PLATFORM]
  },

  {
    name: "Italic",
    file: "Italic.svg",
    description: "Italic",
    tags: "Italic, Text, Design",
    category: [PLATFORM]
  },

  {
    name: "Item",
    file: "Item.svg",
    description: "Item",
    tags: "Item, Board",
    category: [PLATFORM]
  },

  {
    name: "Keyboard",
    file: "Keyboard.svg",
    description: "Keyboard",
    tags: "Keyboard, Key",
    category: [PLATFORM]
  },

  {
    name: "Labs",
    file: "Labs.svg",
    description: "Labs",
    tags: "Labs, Experiment, Tube",
    category: [PLATFORM]
  },

  {
    name: "Lines",
    file: "Lines.svg",
    description: "Lines",
    tags: "Lines, Rows",
    category: [PLATFORM]
  },

  {
    name: "Link",
    file: "Link.svg",
    description: "Link",
    tags: "Link, Chain",
    category: [PLATFORM]
  },

  {
    name: "Location",
    file: "Location.svg",
    description: "Location",
    tags: "Location, Pin, Map",
    category: [PLATFORM]
  },

  {
    name: "Locked",
    file: "Locked.svg",
    description: "Locked",
    tags: "Lock, Locked, Closed, Private",
    category: [PLATFORM]
  },

  {
    name: "LogIn",
    file: "LogIn.svg",
    description: "Log In",
    tags: "LogIn",
    category: [PLATFORM]
  },

  {
    name: "LogOut",
    file: "LogOut.svg",
    description: "Log Out",
    tags: "LogOut",
    category: [PLATFORM]
  },

  {
    name: "Mention",
    file: "Mention.svg",
    description: "Mention",
    tags: "@, Mention, At, Tag",
    category: [PLATFORM]
  },

  {
    name: "Menu",
    file: "Menu.svg",
    description: "Menu",
    tags: "Menu, 3 Dots, Dots",
    category: [BASIC]
  },

  {
    name: "Microphone",
    file: "Microphone.svg",
    description: "Microphone",
    tags: "Microphone, voice, sound",
    category: [BASIC]
  },

  {
    name: "Mobile",
    file: "Mobile.svg",
    description: "Mobile",
    tags: "Mobile, Phone, Touch",
    category: [PLATFORM]
  },

  {
    name: "MondayLogoOutline",
    file: "MondayLogoOutline.svg",
    description: "MondayLogoOutline",
    tags: "Monday, Logo, Outline",
    category: [PLATFORM]
  },

  {
    name: "Moon",
    file: "Moon.svg",
    description: "Moon",
    tags: "Moon, Dark Mode",
    category: [PLATFORM]
  },

  {
    name: "MoveArrowDown",
    file: "MoveArrowDown.svg",
    description: "Move Arrow Down",
    tags: "Move, Arrow, Down",
    category: [BASIC]
  },

  {
    name: "MoveArrowLeft",
    file: "MoveArrowLeft.svg",
    description: "Move Arrow Left",
    tags: "Move, Arrow, Left",
    category: [BASIC]
  },
  {
    name: "MoveArrowRight",
    file: "MoveArrowRight.svg",
    description: "Move Arrow Right",
    tags: "Move, Arrow, Right",
    category: [BASIC]
  },
  {
    name: "MoveArrowUp",
    file: "MoveArrowUp.svg",
    description: "Move Arrow Up",
    tags: "Move, Arrow, Up",
    category: [BASIC]
  },

  {
    name: "Mute",
    file: "Mute.svg",
    description: "Mute",
    tags: "Mute",
    category: [PLATFORM]
  },

  {
    name: "MyWeek",
    file: "MyWeek.svg",
    description: "My week",
    tags: "my week, week, calendar"
  },

  {
    name: "NavigationChevronDown",
    file: "NavigationChevronDown.svg",
    description: "Navigation Chevron Down",
    tags: "Navigation, Arrow, Down",
    category: [BASIC]
  },

  {
    name: "NavigationChevronLeft",
    file: "NavigationChevronLeft.svg",
    description: "Navigation Chevron Left",
    tags: "Navigation, Arrow, Left",
    category: [BASIC]
  },
  {
    name: "NavigationChevronRight",
    file: "NavigationChevronRight.svg",
    description: "Navigation Chevron Right",
    tags: "Navigation, Arrow, Right",
    category: [BASIC]
  },
  {
    name: "NavigationChevronUp",
    file: "NavigationChevronUp.svg",
    description: "Navigation Chevron Up",
    tags: "Navigation, Arrow, Up",
    category: [BASIC]
  },

  {
    name: "NewTab",
    file: "NewTab.svg",
    description: "New Tab",
    tags: "New Tab, Open",
    category: [PLATFORM]
  },

  {
    name: "NoColor",
    file: "NoColor.svg",
    description: "No Color",
    tags: "No Color, Drop",
    category: [PLATFORM]
  },

  {
    name: "Note",
    file: "Note.svg",
    description: "Note",
    tags: "Note, Page",
    category: [PLATFORM]
  },

  {
    name: "Notifications",
    file: "Notifications.svg",
    description: "Notifications",
    tags: "Notifications, Bell",
    category: [PLATFORM]
  },
  {
    name: "Numbers",
    file: "Numbers.svg",
    description: "Numbers",
    tags: "Numbers, List, Design",
    category: [PLATFORM]
  },

  {
    name: "Page",
    file: "Page.svg",
    description: "Page",
    tags: "Page,Single Page,Blank,Platform",
    category: [PLATFORM]
  },

  {
    name: "Paste",
    file: "Paste.svg",
    description: "Paste",
    tags: "Paste, Design",
    category: [PLATFORM]
  },

  {
    name: "Pause",
    file: "Pause.svg",
    description: "Pause",
    tags: "Pause, Hold",
    category: [PLATFORM]
  },

  {
    name: "Person",
    file: "Person.svg",
    description: "Person",
    tags: "Person, People",
    category: [PLATFORM]
  },

  {
    name: "Pin",
    file: "Pin.svg",
    description: "Pin",
    tags: "Pin",
    category: [PLATFORM]
  },

  {
    name: "Play",
    file: "Play.svg",
    description: "Play",
    tags: "Play, Start",
    category: [PLATFORM]
  },

  {
    name: "Print",
    file: "Print.svg",
    description: "Print",
    tags: "Print, Printer",
    category: [PLATFORM]
  },

  {
    name: "PushNotification",
    file: "PushNotification.svg",
    description: "Push Notifications",
    tags: "Push, Notifications, Bar",
    category: [PLATFORM]
  },

  {
    name: "Quote",
    file: "Quote.svg",
    description: "Quote",
    tags: "Quote",
    category: [PLATFORM]
  },

  {
    name: "RecycleBin",
    file: "RecycleBin.svg",
    description: "Recycle bin",
    tags: "Recycle bin, Trash, Recycle, Bin"
  },

  {
    name: "Redo",
    file: "Redo.svg",
    description: "Redo",
    tags: "Redo, Text, Design",
    category: [PLATFORM]
  },

  {
    name: "Remove",
    file: "Remove.svg",
    description: "Remove",
    tags: "Remove, Line, Minus",
    category: [BASIC]
  },

  {
    name: "Reply",
    file: "Reply.svg",
    description: "Reply",
    tags: "Reply, Message, Arrow",
    category: [PLATFORM]
  },

  {
    name: "Retry",
    file: "Retry.svg",
    description: "Retry",
    tags: "Retry, Reload, Refresh",
    category: [PLATFORM]
  },

  {
    name: "Robot",
    file: "Robot.svg",
    description: "Robot",
    tags: "Robot, Automations",
    category: [PLATFORM]
  },

  {
    name: "Rotate",
    file: "Rotate.svg",
    description: "Rotate",
    tags: "Rotate, Clockwise retry, Clockwise reload, Clockwise refresh",
    category: [PLATFORM]
  },

  {
    name: "Search",
    file: "Search.svg",
    description: "Search",
    tags: "Search, Find, Magnifying Glass",
    category: [PLATFORM]
  },

  {
    name: "Security",
    file: "Security.svg",
    description: "Security",
    tags: "Security, Shield, Protect",
    category: [PLATFORM]
  },

  {
    name: "Send",
    file: "Send.svg",
    description: "Send",
    tags: "Send, Message, Plane, Airplane, Paper",
    category: [PLATFORM]
  },

  {
    name: "Settings",
    file: "Settings.svg",
    description: "Settings",
    tags: "Settings, Cog",
    category: [PLATFORM]
  },
  {
    name: "SettingsKnobs",
    file: "SettingsKnobs.svg",
    description: "Settings",
    tags: "Settings, Knobs",
    category: [PLATFORM]
  },

  {
    name: "Share",
    file: "Share.svg",
    description: "Share",
    tags: "Share, Social",
    category: [PLATFORM]
  },

  {
    name: "Show",
    file: "Show.svg",
    description: "Show",
    tags: "Show, Eye",
    category: [PLATFORM]
  },

  {
    name: "Shredder",
    file: "Shredder.svg",
    description: "Shredder",
    tags: "Shredder, Paper, Recycle",
    category: [PLATFORM]
  },

  {
    name: "Sort",
    file: "Sort.svg",
    description: "Sort",
    tags: "Sort",
    category: [PLATFORM]
  },

  {
    name: "Sound",
    file: "Sound.svg",
    description: "Sound",
    tags: "Sound, Audio, Speaker",
    category: [PLATFORM]
  },

  {
    name: "StrikethroughS",
    file: "StrikethroughS.svg",
    description: "Strike Through",
    tags: "Strike Through, Text, Design",
    category: [PLATFORM]
  },

  {
    name: "StrikethroughT",
    file: "StrikethroughT.svg",
    description: "Strike Through",
    tags: "Strike Through, Text, Design",
    category: [PLATFORM]
  },

  {
    name: "Sun",
    file: "Sun.svg",
    description: "Sun",
    tags: "Sun, Light Mode, Mode",
    category: [PLATFORM]
  },

  {
    name: "Switch",
    file: "Switch.svg",
    description: "Switch",
    tags: "Switch, Arrow",
    category: [PLATFORM]
  },

  {
    name: "Table",
    file: "Table.svg",
    description: "Table",
    tags: "Table, Grid",
    category: [VIEW]
  },
  {
    name: "Team",
    file: "Team.svg",
    description: "Team",
    tags: "Team, Person, People, User, Users",
    category: [BASIC]
  },
  {
    name: "Text",
    file: "Text.svg",
    description: "Text",
    tags: "Regular, Text, Design, Font",
    category: [BASIC]
  },

  {
    name: "TextBig",
    file: "TextBig.svg",
    description: "Text Big",
    tags: "Big, Text, Design, Font, Text Big",
    category: [BASIC]
  },

  {
    name: "Textcolor",
    file: "Textcolor.svg",
    description: "Text Color",
    tags: "Text Color, Color, Text, Design",
    category: [PLATFORM]
  },

  {
    name: "TextHuge",
    file: "TextHuge.svg",
    description: "Text Huge",
    tags: "Huge, Text, Design, Font Text Huge",
    category: [BASIC]
  },

  {
    name: "TextSmall",
    file: "TextSmall.svg",
    description: "Text Small",
    tags: "Small, Text, Design, Font, Text Small",
    category: [BASIC]
  },

  {
    name: "ThumbsUp",
    file: "ThumbsUp.svg",
    description: "ThumbsUp",
    tags: "ThumbsUp, Like, Plus",
    category: [PLATFORM]
  },

  {
    name: "Time",
    file: "Time.svg",
    description: "Time",
    tags: "Time, Clock",
    category: [PLATFORM]
  },

  {
    name: "Underline",
    file: "Underline.svg",
    description: "Underline",
    tags: "Underline, Text, Design",
    category: [PLATFORM]
  },

  {
    name: "TurnInto",
    file: "TurnInto.svg",
    description: "Turn Into",
    tags: "Turn Into, Switch",
    category: [PLATFORM]
  },

  {
    name: "Undo",
    file: "Undo.svg",
    description: "Undo",
    tags: "Undo, Text, Design",
    category: [PLATFORM]
  },

  {
    name: "Unlocked",
    file: "Unlocked.svg",
    description: "Unlock",
    tags: "Unlock, Unlocked, Open, Public",
    category: [PLATFORM]
  },

  {
    name: "Update",
    file: "Update.svg",
    description: "Update",
    tags: "Bubble, Update, Message, Talk",
    category: [PLATFORM]
  },

  {
    name: "Upload",
    file: "Upload.svg",
    description: "Upload",
    tags: "Upload, Up, File, Outgoing, Export",
    category: [PLATFORM]
  },

  {
    name: "Versioning",
    file: "Versioning.svg",
    description: "Versioning",
    tags: "Retrospective,Recurring,Time,Time Based,Every,Automation,Cron,Version,History,Platform"
  },

  {
    name: "Video",
    file: "Video.svg",
    description: "Video icon",
    tags: "video",
    category: [PLATFORM]
  },

  {
    name: "Wand",
    file: "Wand.svg",
    description: "Wand",
    tags: "Wand, Star, Template",
    category: [PLATFORM]
  },

  {
    name: "WhatsNew",
    file: "WhatsNew.svg",
    description: "Whats New",
    tags: "WhatsNew, New, Gift",
    category: [PLATFORM]
  },

  {
    name: "Workspace",
    file: "Workspace.svg",
    description: "Workspace",
    tags: "Workspace, Grid",
    category: [PLATFORM]
  },

  {
    name: "Deactivate",
    file: "Deactivate.svg",
    description: "Deactivate",
    tags: "deactivate, active"
  },

  {
    name: "AddToTeam",
    file: "AddToTeam.svg",
    description: "Add to team",
    tags: "user, users, team, add"
  },

  {
    name: "PersonRound",
    file: "PersonRound.svg",
    description: "Person round",
    tags: "person, user"
  },

  {
    name: "UserDomain",
    file: "UserDomain.svg",
    description: "User domain",
    tags: "user, domain, email"
  },

  {
    name: "UserStatus",
    file: "UserStatus.svg",
    description: "User status",
    tags: "user, status"
  }
] satisfies Icon[];
