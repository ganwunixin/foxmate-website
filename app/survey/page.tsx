'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Send, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const TOTAL_STEPS = 12

interface Answers {
  windowsVersion: string
  windowsOther: string
  systemLanguage: string
  languageOther: string
  multiScreen: string
  screenCount: string
  resolution: string
  resolutionOther: string
  featureRatings: {
    foxIt: string
    petDisplay: string
    foxExpression: string
    focusReminder: string
    soundReminder: string
    sessionReport: string
    settingsPage: string
    menuNavigation: string
  }
  aiAccuracy: string
  startupIssues: {
    cannotStart: boolean
    startupError: boolean
    slowStartup: boolean
    blankScreen: boolean
  }
  hasNewUserGuide: string
  petIssues: {
    notShowing: boolean
    wrongPosition: boolean
    cannotDrag: boolean
    imageBroken: boolean
    noExpression: boolean
    multiMonitorIssue: boolean
  }
  hasPetIssues: string
  focusIssues: {
    noReaction: boolean
    stopImmediately: boolean
    scoreUnchanged: boolean
    scoreUnreasonable: boolean
    activityNotRecorded: boolean
  }
  hasFocusIssues: string
  reminderIssues: {
    noReminder: boolean
    tooFrequent: boolean
    noSound: boolean
    volumeIssue: boolean
  }
  hasReminderIssues: string
  reportIssues: {
    noData: boolean
    wrongData: boolean
    chartIssue: boolean
  }
  hasReportIssues: string
  uiIssues: {
    layoutBroken: boolean
    textTruncated: boolean
    buttonNoResponse: boolean
    pageLag: boolean
    menuCannotOpen: boolean
  }
  hasUIIssues: string
  performanceIssues: {
    uiLag: boolean
    computerSlow: boolean
  }
  hasPerformanceIssues: string
  otherIssues: {
    dataLost: boolean
    cannotExit: boolean
  }
  hasOtherIssues: string
  firstUseClarity: string
  interfaceDesign: string
  interfaceComment: string
  foxFeeling: string
  foxFeelingComment: string
  reminderHelpfulness: string
  reminderHelpfulnessComment: string
  otherSuggestions: string
}

export default function SurveyPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [answers, setAnswers] = useState<Answers>({
    windowsVersion: '',
    windowsOther: '',
    systemLanguage: '',
    languageOther: '',
    multiScreen: '',
    screenCount: '',
    resolution: '',
    resolutionOther: '',
    featureRatings: {
      foxIt: '',
      petDisplay: '',
      foxExpression: '',
      focusReminder: '',
      soundReminder: '',
      sessionReport: '',
      settingsPage: '',
      menuNavigation: '',
    },
    aiAccuracy: '',
    startupIssues: {
      cannotStart: false,
      startupError: false,
      slowStartup: false,
      blankScreen: false,
    },
    hasNewUserGuide: '',
    petIssues: {
      notShowing: false,
      wrongPosition: false,
      cannotDrag: false,
      imageBroken: false,
      noExpression: false,
      multiMonitorIssue: false,
    },
    hasPetIssues: '',
    focusIssues: {
      noReaction: false,
      stopImmediately: false,
      scoreUnchanged: false,
      scoreUnreasonable: false,
      activityNotRecorded: false,
    },
    hasFocusIssues: '',
    reminderIssues: {
      noReminder: false,
      tooFrequent: false,
      noSound: false,
      volumeIssue: false,
    },
    hasReminderIssues: '',
    reportIssues: {
      noData: false,
      wrongData: false,
      chartIssue: false,
    },
    hasReportIssues: '',
    uiIssues: {
      layoutBroken: false,
      textTruncated: false,
      buttonNoResponse: false,
      pageLag: false,
      menuCannotOpen: false,
    },
    hasUIIssues: '',
    performanceIssues: {
      uiLag: false,
      computerSlow: false,
    },
    hasPerformanceIssues: '',
    otherIssues: {
      dataLost: false,
      cannotExit: false,
    },
    hasOtherIssues: '',
    firstUseClarity: '',
    interfaceDesign: '',
    interfaceComment: '',
    foxFeeling: '',
    foxFeelingComment: '',
    reminderHelpfulness: '',
    reminderHelpfulnessComment: '',
    otherSuggestions: '',
  })

  const updateAnswer = (key: keyof Answers, value: string | boolean | object) => {
    setAnswers(prev => ({ ...prev, [key]: value }))
  }

  const updateFeatureRating = (feature: keyof Answers['featureRatings'], value: string) => {
    setAnswers(prev => ({
      ...prev,
      featureRatings: { ...prev.featureRatings, [feature]: value }
    }))
  }

  const updateStartupIssue = (issue: keyof Answers['startupIssues'], value: boolean) => {
    setAnswers(prev => ({
      ...prev,
      startupIssues: { ...prev.startupIssues, [issue]: value }
    }))
  }

  const updatePetIssue = (issue: keyof Answers['petIssues'], value: boolean) => {
    setAnswers(prev => ({
      ...prev,
      petIssues: { ...prev.petIssues, [issue]: value }
    }))
  }

  const updateFocusIssue = (issue: keyof Answers['focusIssues'], value: boolean) => {
    setAnswers(prev => ({
      ...prev,
      focusIssues: { ...prev.focusIssues, [issue]: value }
    }))
  }

  const updateReminderIssue = (issue: keyof Answers['reminderIssues'], value: boolean) => {
    setAnswers(prev => ({
      ...prev,
      reminderIssues: { ...prev.reminderIssues, [issue]: value }
    }))
  }

  const updateReportIssue = (issue: keyof Answers['reportIssues'], value: boolean) => {
    setAnswers(prev => ({
      ...prev,
      reportIssues: { ...prev.reportIssues, [issue]: value }
    }))
  }

  const updateUIIssue = (issue: keyof Answers['uiIssues'], value: boolean) => {
    setAnswers(prev => ({
      ...prev,
      uiIssues: { ...prev.uiIssues, [issue]: value }
    }))
  }

  const updatePerformanceIssue = (issue: keyof Answers['performanceIssues'], value: boolean) => {
    setAnswers(prev => ({
      ...prev,
      performanceIssues: { ...prev.performanceIssues, [issue]: value }
    }))
  }

  const updateOtherIssue = (issue: keyof Answers['otherIssues'], value: boolean) => {
    setAnswers(prev => ({
      ...prev,
      otherIssues: { ...prev.otherIssues, [issue]: value }
    }))
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        if (answers.windowsVersion === 'other') return answers.windowsOther !== ''
        return answers.windowsVersion !== ''
      case 2:
        if (answers.systemLanguage === 'other') return answers.languageOther !== ''
        return answers.systemLanguage !== ''
      case 3:
        if (answers.multiScreen === 'yes') return answers.screenCount !== ''
        return answers.multiScreen !== ''
      case 4:
        if (answers.resolution === 'other') return answers.resolutionOther !== ''
        return answers.resolution !== ''
      case 5:
        return true
      case 6:
        return answers.aiAccuracy !== ''
      case 7:
        return answers.hasNewUserGuide !== ''
      case 8:
        return answers.hasPetIssues !== ''
      case 9:
        return answers.hasFocusIssues !== ''
      case 10:
        return answers.hasReminderIssues !== ''
      case 11:
        return answers.hasReportIssues !== '' && answers.hasUIIssues !== '' && answers.hasPerformanceIssues !== '' && answers.hasOtherIssues !== ''
      case 12:
        return answers.firstUseClarity !== '' && answers.interfaceDesign !== '' && answers.foxFeeling !== '' && answers.reminderHelpfulness !== ''
      default:
        return false
    }
  }

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleSubmit = () => {
    console.log('Survey submitted:', answers)
    setIsSubmitted(true)
  }

  const progressPercent = (currentStep / TOTAL_STEPS) * 100

  const ratingOptions = [
    { value: '1', label: '1', desc: '非常不满意' },
    { value: '2', label: '2', desc: '不满意' },
    { value: '3', label: '3', desc: '一般' },
    { value: '4', label: '4', desc: '满意' },
    { value: '5', label: '5', desc: '非常满意' },
    { value: 'na', label: 'N/A', desc: '没使用/没找到' },
  ]

  const featureLabels: { key: keyof Answers['featureRatings']; label: string }[] = [
    { key: 'foxIt', label: 'Fox it! 启动专注监测' },
    { key: 'petDisplay', label: '桌面狐狸宠物显示' },
    { key: 'foxExpression', label: '狐狸表情变化' },
    { key: 'focusReminder', label: '专注度提醒消息' },
    { key: 'soundReminder', label: '声音提醒' },
    { key: 'sessionReport', label: 'Session Report 报告' },
    { key: 'settingsPage', label: '设置页面' },
    { key: 'menuNavigation', label: '菜单导航' },
  ]

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <Navbar />
        
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-green-500 to-green-400" />
              
              <div className="p-12 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                
                <h1 className="text-3xl font-bold mb-4 gradient-text">
                  感谢您的参与！
                </h1>
                
                <p className="text-gray-600 text-lg mb-8">
                  您的反馈对我们非常重要，我们会认真分析并改进FoxMate！
                </p>

                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 hover:bg-orange-600 hover:shadow-lg"
                >
                  返回首页
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Navbar />
      
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <Image 
              src="/fMtFShZxa.png" 
              alt="FoxMate Logo" 
              width={60} 
              height={60}
              className="w-16 h-16 object-contain mx-auto mb-4"
            />
            <h1 className="text-4xl font-bold font-display mb-4 gradient-text">
              FoxMate.ai 用户调查
            </h1>
            <p className="text-gray-600">
              您的反馈将帮助我们改进产品体验
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="h-2 bg-gray-100">
              <div 
                className="h-full bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-gray-500">第 {currentStep} 步 / 共 {TOTAL_STEPS} 步</span>
                <span className="text-sm font-medium text-orange-500">{Math.round(progressPercent)}% 完成</span>
              </div>

              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold mb-2">基础信息调查</h2>
                    <p className="text-gray-600 mb-4">请问您使用的Windows版本是？</p>
                    
                    <div className="space-y-3">
                      {[
                        { value: 'win10', label: 'Windows 10' },
                        { value: 'win11', label: 'Windows 11' },
                        { value: 'other', label: '其他' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => updateAnswer('windowsVersion', option.value)}
                          className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                            answers.windowsVersion === option.value
                              ? 'border-orange-500 bg-orange-50 text-orange-600'
                              : 'border-gray-200 hover:border-orange-300'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>

                    {answers.windowsVersion === 'other' && (
                      <input
                        type="text"
                        placeholder="请说明..."
                        value={answers.windowsOther}
                        onChange={(e) => updateAnswer('windowsOther', e.target.value)}
                        className="w-full mt-3 p-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                      />
                    )}
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold mb-2">系统语言</h2>
                    <p className="text-gray-600 mb-4">请问您使用的系统语言是？</p>
                    
                    <div className="space-y-3">
                      {[
                        { value: 'chinese', label: '中文' },
                        { value: 'english', label: 'English' },
                        { value: 'other', label: '其他' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => updateAnswer('systemLanguage', option.value)}
                          className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                            answers.systemLanguage === option.value
                              ? 'border-orange-500 bg-orange-50 text-orange-600'
                              : 'border-gray-200 hover:border-orange-300'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>

                    {answers.systemLanguage === 'other' && (
                      <input
                        type="text"
                        placeholder="请说明..."
                        value={answers.languageOther}
                        onChange={(e) => updateAnswer('languageOther', e.target.value)}
                        className="w-full mt-3 p-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                      />
                    )}
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold mb-2">多屏设置</h2>
                    <p className="text-gray-600 mb-4">请问您是否使用多屏？</p>
                    
                    <div className="space-y-3">
                      {[
                        { value: 'no', label: '否' },
                        { value: 'yes', label: '是' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => updateAnswer('multiScreen', option.value)}
                          className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                            answers.multiScreen === option.value
                              ? 'border-orange-500 bg-orange-50 text-orange-600'
                              : 'border-gray-200 hover:border-orange-300'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>

                    {answers.multiScreen === 'yes' && (
                      <div className="mt-4">
                        <p className="text-gray-600 mb-3">请说明具体使用几个屏幕：</p>
                        <div className="grid grid-cols-4 gap-3">
                          {[2, 3, 4, '5+'].map((count) => (
                            <button
                              key={count}
                              onClick={() => updateAnswer('screenCount', String(count))}
                              className={`p-4 rounded-xl border-2 text-center font-bold text-xl transition-all duration-200 ${
                                answers.screenCount === String(count)
                                  ? 'border-orange-500 bg-orange-50 text-orange-600'
                                  : 'border-gray-200 hover:border-orange-300'
                              }`}
                            >
                              {count}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold mb-2">屏幕分辨率</h2>
                    <p className="text-gray-600 mb-4">请问您使用的屏幕分辨率是？（如果您使用不止一个屏幕，请提供所有屏幕的分辨率）</p>
                    
                    <div className="space-y-3">
                      {[
                        { value: '1080p', label: '1080P' },
                        { value: '2k', label: '2K' },
                        { value: '4k', label: '4K' },
                        { value: 'other', label: '其他' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => updateAnswer('resolution', option.value)}
                          className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                            answers.resolution === option.value
                              ? 'border-orange-500 bg-orange-50 text-orange-600'
                              : 'border-gray-200 hover:border-orange-300'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>

                    {answers.resolution === 'other' && (
                      <input
                        type="text"
                        placeholder="请说明..."
                        value={answers.resolutionOther}
                        onChange={(e) => updateAnswer('resolutionOther', e.target.value)}
                        className="w-full mt-3 p-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                      />
                    )}
                  </div>
                </div>
              )}

              {currentStep === 5 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold mb-2">核心功能使用调查</h2>
                    <p className="text-gray-600 mb-4">请对以下功能的使用体验做出评价（1=非常不满意，5=非常满意，N/A=没使用、没找到此功能）</p>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 pr-4 font-medium text-gray-700">功能</th>
                            {ratingOptions.map(opt => (
                              <th key={opt.value} className="text-center py-3 px-2 font-medium text-gray-700 whitespace-nowrap">
                                <div>{opt.label}</div>
                                <div className="text-xs text-gray-400 font-normal">{opt.desc}</div>
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {featureLabels.map(({ key, label }) => (
                            <tr key={key} className="border-b">
                              <td className="py-3 pr-4 text-gray-600">{label}</td>
                              {ratingOptions.map(opt => (
                                <td key={opt.value} className="text-center py-3 px-2">
                                  <button
                                    onClick={() => updateFeatureRating(key, opt.value)}
                                    className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                                      answers.featureRatings[key] === opt.value
                                        ? 'border-orange-500 bg-orange-500 text-white'
                                        : 'border-gray-300 hover:border-orange-400'
                                    }`}
                                  >
                                    {opt.label}
                                  </button>
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 6 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold mb-2">AI 专注度判断准确性</h2>
                    <p className="text-gray-600 mb-4">在您的使用过程中，AI 对您专注状态的判断：</p>
                    
                    <div className="space-y-3">
                      {[
                        { value: 'very_accurate', label: '非常准确 (>90% 符合实际)' },
                        { value: 'accurate', label: '比较准确 (70-90%)' },
                        { value: 'average', label: '一般 (50-70%)' },
                        { value: 'inaccurate', label: '不太准确 (30-50%)' },
                        { value: 'very_inaccurate', label: '很不准确 (<30%)' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => updateAnswer('aiAccuracy', option.value)}
                          className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                            answers.aiAccuracy === option.value
                              ? 'border-orange-500 bg-orange-50 text-orange-600'
                              : 'border-gray-200 hover:border-orange-300'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 7 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold mb-4">启动相关</h2>
                    
                    <div className="space-y-4 mb-6">
                      <p className="text-gray-600">是否出现以下问题？</p>
                      {[
                        { key: 'cannotStart', label: '程序无法启动' },
                        { key: 'startupError', label: '启动时报错/弹窗' },
                        { key: 'slowStartup', label: '启动非常慢 (>10秒)' },
                        { key: 'blankScreen', label: '启动后界面空白' },
                      ].map(({ key, label }) => (
                        <label key={key} className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={answers.startupIssues[key as keyof Answers['startupIssues']]}
                            onChange={(e) => updateStartupIssue(key as keyof Answers['startupIssues'], e.target.checked)}
                            className="w-5 h-5 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                          />
                          <span className="text-gray-700">{label}</span>
                        </label>
                      ))}
                    </div>

                    <div className="border-t pt-4">
                      <p className="text-gray-600 mb-3">启动之前是否有新手指引？</p>
                      <div className="flex gap-4">
                        {[
                          { value: 'yes', label: '是' },
                          { value: 'no', label: '否' },
                        ].map((option) => (
                          <button
                            key={option.value}
                            onClick={() => updateAnswer('hasNewUserGuide', option.value)}
                            className={`flex-1 p-4 rounded-xl border-2 text-center transition-all duration-200 ${
                              answers.hasNewUserGuide === option.value
                                ? 'border-orange-500 bg-orange-50 text-orange-600'
                                : 'border-gray-200 hover:border-orange-300'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 8 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold mb-4">桌面宠物相关</h2>
                    
                    <div className="mb-4">
                      <p className="text-gray-600 mb-3">是否出现问题？</p>
                      <div className="flex gap-4">
                        {[
                          { value: 'yes', label: '是' },
                          { value: 'no', label: '否' },
                        ].map((option) => (
                          <button
                            key={option.value}
                            onClick={() => updateAnswer('hasPetIssues', option.value)}
                            className={`flex-1 p-4 rounded-xl border-2 text-center transition-all duration-200 ${
                              answers.hasPetIssues === option.value
                                ? 'border-orange-500 bg-orange-50 text-orange-600'
                                : 'border-gray-200 hover:border-orange-300'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {answers.hasPetIssues === 'yes' && (
                      <div className="space-y-3">
                        {[
                          { key: 'notShowing', label: '狐狸不显示' },
                          { key: 'wrongPosition', label: '狐狸位置错误（在屏幕外）' },
                          { key: 'cannotDrag', label: '狐狸无法拖动' },
                          { key: 'imageBroken', label: '狐狸图片显示异常/破损' },
                          { key: 'noExpression', label: '狐狸表情不会变化' },
                          { key: 'multiMonitorIssue', label: '多显示器时狐狸行为异常' },
                        ].map(({ key, label }) => (
                          <label key={key} className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={answers.petIssues[key as keyof Answers['petIssues']]}
                              onChange={(e) => updatePetIssue(key as keyof Answers['petIssues'], e.target.checked)}
                              className="w-5 h-5 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                            />
                            <span className="text-gray-700">{label}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {currentStep === 9 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold mb-4">专注监测相关</h2>
                    
                    <div className="mb-4">
                      <p className="text-gray-600 mb-3">是否出现问题？</p>
                      <div className="flex gap-4">
                        {[
                          { value: 'yes', label: '是' },
                          { value: 'no', label: '否' },
                        ].map((option) => (
                          <button
                            key={option.value}
                            onClick={() => updateAnswer('hasFocusIssues', option.value)}
                            className={`flex-1 p-4 rounded-xl border-2 text-center transition-all duration-200 ${
                              answers.hasFocusIssues === option.value
                                ? 'border-orange-500 bg-orange-50 text-orange-600'
                                : 'border-gray-200 hover:border-orange-300'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {answers.hasFocusIssues === 'yes' && (
                      <div className="space-y-3">
                        {[
                          { key: 'noReaction', label: '点击 "Fox it!" 无反应' },
                          { key: 'stopImmediately', label: '监测开始后立即停止' },
                          { key: 'scoreUnchanged', label: '专注度分数始终不变' },
                          { key: 'scoreUnreasonable', label: '专注度分数明显不合理' },
                          { key: 'activityNotRecorded', label: '键盘/鼠标活动未被记录' },
                        ].map(({ key, label }) => (
                          <label key={key} className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={answers.focusIssues[key as keyof Answers['focusIssues']]}
                              onChange={(e) => updateFocusIssue(key as keyof Answers['focusIssues'], e.target.checked)}
                              className="w-5 h-5 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                            />
                            <span className="text-gray-700">{label}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {currentStep === 10 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold mb-4">提醒相关</h2>
                    
                    <div className="mb-4">
                      <p className="text-gray-600 mb-3">是否出现问题？</p>
                      <div className="flex gap-4">
                        {[
                          { value: 'yes', label: '是' },
                          { value: 'no', label: '否' },
                        ].map((option) => (
                          <button
                            key={option.value}
                            onClick={() => updateAnswer('hasReminderIssues', option.value)}
                            className={`flex-1 p-4 rounded-xl border-2 text-center transition-all duration-200 ${
                              answers.hasReminderIssues === option.value
                                ? 'border-orange-500 bg-orange-50 text-orange-600'
                                : 'border-gray-200 hover:border-orange-300'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {answers.hasReminderIssues === 'yes' && (
                      <div className="space-y-3">
                        {[
                          { key: 'noReminder', label: '从不弹出提醒消息' },
                          { key: 'tooFrequent', label: '提醒消息太频繁' },
                          { key: 'noSound', label: '声音提醒不播放' },
                          { key: 'volumeIssue', label: '声音提醒音量太大或者太小' },
                        ].map(({ key, label }) => (
                          <label key={key} className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={answers.reminderIssues[key as keyof Answers['reminderIssues']]}
                              onChange={(e) => updateReminderIssue(key as keyof Answers['reminderIssues'], e.target.checked)}
                              className="w-5 h-5 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                            />
                            <span className="text-gray-700">{label}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {currentStep === 11 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold mb-4">报告 / 界面 / 性能 / 其他问题</h2>
                    
                    <div className="mb-6">
                      <p className="text-gray-600 mb-3 font-medium">报告相关 - 是否出现问题？</p>
                      <div className="flex gap-4 mb-3">
                        {[
                          { value: 'yes', label: '是' },
                          { value: 'no', label: '否' },
                        ].map((option) => (
                          <button
                            key={option.value}
                            onClick={() => updateAnswer('hasReportIssues', option.value)}
                            className={`flex-1 p-3 rounded-xl border-2 text-center transition-all duration-200 ${
                              answers.hasReportIssues === option.value
                                ? 'border-orange-500 bg-orange-50 text-orange-600'
                                : 'border-gray-200 hover:border-orange-300'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                      {answers.hasReportIssues === 'yes' && (
                        <div className="space-y-2 ml-4">
                          {[
                            { key: 'noData', label: 'Session Report 无数据' },
                            { key: 'wrongData', label: 'Session Report 数据错误' },
                            { key: 'chartIssue', label: '图表显示异常' },
                          ].map(({ key, label }) => (
                            <label key={key} className="flex items-center gap-3 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={answers.reportIssues[key as keyof Answers['reportIssues']]}
                                onChange={(e) => updateReportIssue(key as keyof Answers['reportIssues'], e.target.checked)}
                                className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                              />
                              <span className="text-gray-700 text-sm">{label}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="mb-6 border-t pt-4">
                      <p className="text-gray-600 mb-3 font-medium">界面相关 - 是否出现问题？</p>
                      <div className="flex gap-4 mb-3">
                        {[
                          { value: 'yes', label: '是' },
                          { value: 'no', label: '否' },
                        ].map((option) => (
                          <button
                            key={option.value}
                            onClick={() => updateAnswer('hasUIIssues', option.value)}
                            className={`flex-1 p-3 rounded-xl border-2 text-center transition-all duration-200 ${
                              answers.hasUIIssues === option.value
                                ? 'border-orange-500 bg-orange-50 text-orange-600'
                                : 'border-gray-200 hover:border-orange-300'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                      {answers.hasUIIssues === 'yes' && (
                        <div className="space-y-2 ml-4">
                          {[
                            { key: 'layoutBroken', label: '界面布局错乱' },
                            { key: 'textTruncated', label: '文字显示不全/被截断' },
                            { key: 'buttonNoResponse', label: '按钮点击无响应' },
                            { key: 'pageLag', label: '页面切换卡顿' },
                            { key: 'menuCannotOpen', label: '抽屉菜单打不开' },
                          ].map(({ key, label }) => (
                            <label key={key} className="flex items-center gap-3 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={answers.uiIssues[key as keyof Answers['uiIssues']]}
                                onChange={(e) => updateUIIssue(key as keyof Answers['uiIssues'], e.target.checked)}
                                className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                              />
                              <span className="text-gray-700 text-sm">{label}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="mb-6 border-t pt-4">
                      <p className="text-gray-600 mb-3 font-medium">性能相关 - 是否出现问题？</p>
                      <div className="flex gap-4 mb-3">
                        {[
                          { value: 'yes', label: '是' },
                          { value: 'no', label: '否' },
                        ].map((option) => (
                          <button
                            key={option.value}
                            onClick={() => updateAnswer('hasPerformanceIssues', option.value)}
                            className={`flex-1 p-3 rounded-xl border-2 text-center transition-all duration-200 ${
                              answers.hasPerformanceIssues === option.value
                                ? 'border-orange-500 bg-orange-50 text-orange-600'
                                : 'border-gray-200 hover:border-orange-300'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                      {answers.hasPerformanceIssues === 'yes' && (
                        <div className="space-y-2 ml-4">
                          {[
                            { key: 'uiLag', label: '界面卡顿/不流畅' },
                            { key: 'computerSlow', label: '打开之后电脑明显变慢' },
                          ].map(({ key, label }) => (
                            <label key={key} className="flex items-center gap-3 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={answers.performanceIssues[key as keyof Answers['performanceIssues']]}
                                onChange={(e) => updatePerformanceIssue(key as keyof Answers['performanceIssues'], e.target.checked)}
                                className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                              />
                              <span className="text-gray-700 text-sm">{label}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="border-t pt-4">
                      <p className="text-gray-600 mb-3 font-medium">其他 - 是否出现问题？</p>
                      <div className="flex gap-4 mb-3">
                        {[
                          { value: 'yes', label: '是' },
                          { value: 'no', label: '否' },
                        ].map((option) => (
                          <button
                            key={option.value}
                            onClick={() => updateAnswer('hasOtherIssues', option.value)}
                            className={`flex-1 p-3 rounded-xl border-2 text-center transition-all duration-200 ${
                              answers.hasOtherIssues === option.value
                                ? 'border-orange-500 bg-orange-50 text-orange-600'
                                : 'border-gray-200 hover:border-orange-300'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                      {answers.hasOtherIssues === 'yes' && (
                        <div className="space-y-2 ml-4">
                          {[
                            { key: 'dataLost', label: '数据无故丢失' },
                            { key: 'cannotExit', label: '程序无法顺利退出' },
                          ].map(({ key, label }) => (
                            <label key={key} className="flex items-center gap-3 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={answers.otherIssues[key as keyof Answers['otherIssues']]}
                                onChange={(e) => updateOtherIssue(key as keyof Answers['otherIssues'], e.target.checked)}
                                className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                              />
                              <span className="text-gray-700 text-sm">{label}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 12 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold mb-4">使用体验与建议</h2>
                    
                    <div className="mb-6">
                      <p className="text-gray-600 mb-3">首次使用时，您是否清楚如何操作？</p>
                      <div className="space-y-2">
                        {[
                          { value: 'very_clear', label: '完全清楚，很直观' },
                          { value: 'mostly_clear', label: '大部分清楚，有些功能需要摸索' },
                          { value: 'somewhat_confused', label: '有点困惑，需要看说明' },
                          { value: 'very_confused', label: '很困惑，不知道怎么开始' },
                        ].map((option) => (
                          <button
                            key={option.value}
                            onClick={() => updateAnswer('firstUseClarity', option.value)}
                            className={`w-full p-3 rounded-xl border-2 text-left text-sm transition-all duration-200 ${
                              answers.firstUseClarity === option.value
                                ? 'border-orange-500 bg-orange-50 text-orange-600'
                                : 'border-gray-200 hover:border-orange-300'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6 border-t pt-4">
                      <p className="text-gray-600 mb-3">界面设计</p>
                      <div className="flex gap-2 flex-wrap">
                        {[
                          { value: '1', label: '很难看' },
                          { value: '2', label: '不太好看' },
                          { value: '3', label: '一般' },
                          { value: '4', label: '还不错' },
                          { value: '5', label: '很喜欢' },
                        ].map((option) => (
                          <button
                            key={option.value}
                            onClick={() => updateAnswer('interfaceDesign', option.value)}
                            className={`px-4 py-2 rounded-xl border-2 text-sm transition-all duration-200 ${
                              answers.interfaceDesign === option.value
                                ? 'border-orange-500 bg-orange-50 text-orange-600'
                                : 'border-gray-200 hover:border-orange-300'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                      <textarea
                        placeholder="整体视觉感受（选填）"
                        value={answers.interfaceComment}
                        onChange={(e) => updateAnswer('interfaceComment', e.target.value)}
                        className="w-full mt-3 p-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-sm"
                        rows={2}
                      />
                    </div>

                    <div className="mb-6 border-t pt-4">
                      <p className="text-gray-600 mb-3">桌面狐狸宠物</p>
                      <div className="flex gap-2 flex-wrap">
                        {[
                          { value: '1', label: '很烦，想关掉' },
                          { value: '2', label: '有点分散注意力' },
                          { value: '3', label: '还行，不影响使用' },
                          { value: '4', label: '很可爱，增加使用动力' },
                        ].map((option) => (
                          <button
                            key={option.value}
                            onClick={() => updateAnswer('foxFeeling', option.value)}
                            className={`px-4 py-2 rounded-xl border-2 text-sm transition-all duration-200 ${
                              answers.foxFeeling === option.value
                                ? 'border-orange-500 bg-orange-50 text-orange-600'
                                : 'border-gray-200 hover:border-orange-300'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                      <textarea
                        placeholder="您对桌面狐狸的感受（选填）"
                        value={answers.foxFeelingComment}
                        onChange={(e) => updateAnswer('foxFeelingComment', e.target.value)}
                        className="w-full mt-3 p-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-sm"
                        rows={2}
                      />
                    </div>

                    <div className="mb-6 border-t pt-4">
                      <p className="text-gray-600 mb-3">提醒机制</p>
                      <div className="flex gap-2 flex-wrap">
                        {[
                          { value: '1', label: '感觉被打扰/反感' },
                          { value: '2', label: '没什么感觉' },
                          { value: '3', label: '有一点帮助' },
                          { value: '4', label: '很有帮助，会按建议行动' },
                        ].map((option) => (
                          <button
                            key={option.value}
                            onClick={() => updateAnswer('reminderHelpfulness', option.value)}
                            className={`px-4 py-2 rounded-xl border-2 text-sm transition-all duration-200 ${
                              answers.reminderHelpfulness === option.value
                                ? 'border-orange-500 bg-orange-50 text-orange-600'
                                : 'border-gray-200 hover:border-orange-300'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                      <textarea
                        placeholder="提醒的文案对您有帮助吗？（选填）"
                        value={answers.reminderHelpfulnessComment}
                        onChange={(e) => updateAnswer('reminderHelpfulnessComment', e.target.value)}
                        className="w-full mt-3 p-3 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-sm"
                        rows={2}
                      />
                    </div>

                    <div className="border-t pt-4">
                      <p className="text-gray-600 mb-3">您还有任何其他建议或想说的话吗？</p>
                      <textarea
                        placeholder="请输入您的建议..."
                        value={answers.otherSuggestions}
                        onChange={(e) => updateAnswer('otherSuggestions', e.target.value)}
                        className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none"
                        rows={4}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
                <button
                  onClick={handlePrev}
                  disabled={currentStep === 1}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                    currentStep === 1
                      ? 'text-gray-300 cursor-not-allowed'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                  上一步
                </button>

                {currentStep < TOTAL_STEPS ? (
                  <button
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className={`flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all duration-200 ${
                      canProceed()
                        ? 'bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    下一步
                    <ChevronRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="flex items-center gap-2 px-8 py-3 rounded-xl font-semibold bg-green-500 text-white hover:bg-green-600 hover:shadow-lg transition-all duration-200"
                  >
                    提交
                    <Send className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            🔒 您的回答将匿名保存，仅用于改进FoxMate
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
