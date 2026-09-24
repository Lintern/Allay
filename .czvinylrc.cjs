module.exports = {
  headerFormat(type, scope, emoji, ticketId, subject) {
    const name = scope && scope !== "跳过" ? scope.replace(/\s*[:：]\s*.+$/, "").trim() : ""
    const scopePart = name ? `(${name})` : ""
    return `${emoji} ${type}${scopePart}: ${subject}`
  },
  commitTypes: [
      {
          description: "添加新的功能",
          emoji: "✨",
          value: "feat"
      },
      {
          description: "修复 Bug",
          emoji: "🐛",
          value: "fix"
      },
      {
          description: "重构（不修复 Bug 也不添加功能）",
          emoji: "🔨",
          value: "refactor"
      },
      {
          description: "改进项目结构/代码格式",
          emoji: "🎨",
          value: "style"
      },
      {
          description: "提高性能",
          emoji: "⚡️",
          value: "perf"
      },
      {
          description: "辅助工具的变动或者无法分类的提交",
          emoji: "🔧",
          value: "chore"
      },
      {
          description: "发布版本",
          emoji: "🔖",
          value: "release"
      },
      {
          description: "删除代码或者文件",
          emoji: "🔥",
          value: "del"
      },
      {
          description: "国际化和本地化 (i18n)",
          emoji: "🌐",
          value: "i18n"
      },
      {
          description: "添加或更新测试用例",
          emoji: "✅",
          value: "test"
      },
      {
          description: "构建相关变动",
          emoji: "📦",
          value: "build"
      },
      {
          description: "撤销提交",
          emoji: "⏪",
          value: "revert"
      },
      {
          description: "合并分支",
          emoji: "🔀",
          value: "merge"
      }
  ],
    scopes: [
    "跳过",
    "fe: 前端",
    "be: 后端",
    "ci: 流水线",
    "cfg: 配置",
    "docs: 文档"
  ],
  skipTicketId: true,
  skipScope: false,
  subjectMaxLength: 70,
  subjectMinLength: 3,
  typeQuestion: "请选择一个提交类型:",
  scopeQuestion: "请选择或者输入一个影响范围:\n",
  subjectQuestion: "请输入提交信息:",
  bodyQuestion: "请输入提交详细内容:"
}