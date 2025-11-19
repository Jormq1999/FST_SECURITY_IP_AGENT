# 🧪 Manual Testing Guide

**Portal:** Team Information Portal  
**Version:** 1.0.0  
**Date:** November 19, 2025  

---

## Quick Test Instructions

Open the portal and work through these interactive tests. Check each box as you verify.

### 🚀 How to Test

1. **Open the portal:**
   ```
   file:///nfs/site/disks/randallj_disk_002/sandboxes/FST_SECURITY_IP_AGENT/index.html
   ```

2. **Open Browser DevTools:**
   - Press `F12` or `Ctrl+Shift+I` (Cmd+Option+I on Mac)
   - Check Console tab for errors
   - Use Network tab to monitor load times

3. **Use the interactive checklist:**
   ```
   file:///nfs/site/disks/randallj_disk_002/sandboxes/FST_SECURITY_IP_AGENT/tests/test-portal.html
   ```

---

## ⚡ Priority 1: Core Functionality Tests (5 minutes)

### Test 1: Sidebar Toggle
**Steps:**
1. Look for "Collapse" button at bottom of left sidebar
2. Click the button
3. Sidebar should shrink from 256px to 64px
4. Icon should change direction (◀ → ▶)
5. Click again to expand

**Expected Result:** ✅ Smooth transition, icons visible, no console errors

**Actual Result:** _________________

---

### Test 2: Theme Toggle
**Steps:**
1. Click the sun/moon icon in top-right header
2. Page should switch between light and dark themes
3. Reload the page
4. Theme preference should persist

**Expected Result:** ✅ Instant theme change, preference saved

**Actual Result:** _________________

---

### Test 3: Search Modal
**Steps:**
1. Press `Ctrl+K` (or `Cmd+K` on Mac)
2. Search modal should appear with backdrop
3. Type "test" in the search box
4. Press `Escape` key
5. Modal should close

**Expected Result:** ✅ Modal opens/closes, keyboard shortcut works

**Actual Result:** _________________

---

### Test 4: Navigation Menu
**Steps:**
1. Click on "Architecture" in the sidebar
2. Submenu should expand showing CSME, CSE, OCS
3. Click "Architecture" again
4. Submenu should collapse

**Expected Result:** ✅ Smooth expand/collapse animation

**Actual Result:** _________________

---

### Test 5: Chat Interface
**Steps:**
1. Type a message in the chat input at bottom-right
2. Press Enter or click Send button
3. Message should appear in chat area
4. AI should respond after ~1 second (simulated)

**Expected Result:** ✅ Messages display, simulated response works

**Actual Result:** _________________

---

## 📱 Priority 2: Responsive Design (10 minutes)

### Test 6: Mobile Layout (< 640px)
**Steps:**
1. Open DevTools (F12)
2. Click "Toggle Device Toolbar" (Ctrl+Shift+M)
3. Select "iPhone 12 Pro" or set width to 390px
4. Verify layout stacks vertically
5. Check that text is readable without zooming

**Expected Result:** ✅ Mobile-friendly layout, no horizontal scroll

**Actual Result:** _________________

---

### Test 7: Tablet Layout (640px - 1024px)
**Steps:**
1. In DevTools, select "iPad" or set width to 768px
2. Verify 2-column layout appears
3. Check sidebar visibility
4. Test chat panel behavior

**Expected Result:** ✅ Optimized for tablet viewing

**Actual Result:** _________________

---

### Test 8: Desktop Layout (1024px+)
**Steps:**
1. Set browser width to 1280px or full screen
2. Verify 3-column layout (sidebar, content, chat)
3. Check that content doesn't stretch too wide
4. Verify all spacing looks correct

**Expected Result:** ✅ Professional desktop layout

**Actual Result:** _________________

---

## ♿ Priority 3: Accessibility (10 minutes)

### Test 9: Keyboard Navigation
**Steps:**
1. Click in the address bar
2. Press `Tab` repeatedly
3. Verify focus moves through all interactive elements
4. Check that focus indicator (blue outline) is visible
5. Verify you can activate buttons with `Enter` or `Space`

**Expected Result:** ✅ All elements reachable, focus visible

**Actual Result:** _________________

---

### Test 10: Screen Reader (if available)
**Steps:**
1. Enable screen reader:
   - Windows: NVDA or JAWS
   - Mac: VoiceOver (Cmd+F5)
   - Linux: Orca
2. Navigate through the page
3. Verify elements are announced correctly
4. Check ARIA labels are read

**Expected Result:** ✅ Meaningful announcements, no missing labels

**Actual Result:** _________________

---

### Test 11: Color Contrast
**Steps:**
1. Switch to both light and dark themes
2. Check text readability
3. In DevTools, run Lighthouse audit
4. Check for contrast violations

**Expected Result:** ✅ WCAG AA compliance (4.5:1 ratio)

**Actual Result:** _________________

---

## 🚀 Priority 4: Performance (5 minutes)

### Test 12: Lighthouse Audit
**Steps:**
1. Open DevTools → Lighthouse tab
2. Select "Desktop" mode
3. Check all categories (Performance, Accessibility, Best Practices, SEO)
4. Click "Generate report"
5. Review scores

**Expected Scores:**
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 80

**Actual Scores:**
- Performance: _______
- Accessibility: _______
- Best Practices: _______
- SEO: _______

---

### Test 13: Load Time
**Steps:**
1. Open DevTools → Network tab
2. Check "Disable cache"
3. Reload page (Ctrl+R)
4. Check "Load" time at bottom

**Expected Result:** ✅ Load time < 3 seconds

**Actual Result:** _______ seconds

---

### Test 14: Console Errors
**Steps:**
1. Open DevTools → Console tab
2. Reload page
3. Check for any errors (red text)
4. Check for warnings (yellow text)

**Expected Result:** ✅ Zero errors, minimal warnings

**Actual Result:** _______ errors, _______ warnings

---

## 🌐 Priority 5: Cross-Browser (20 minutes)

### Test 15: Chrome
**Steps:**
1. Open portal in Google Chrome
2. Run through Tests 1-5 above
3. Check for any visual glitches
4. Note any issues

**Expected Result:** ✅ Full compatibility

**Issues Found:** _________________

---

### Test 16: Firefox
**Steps:**
1. Open portal in Mozilla Firefox
2. Run through Tests 1-5 above
3. Check CSS Grid rendering
4. Note any issues

**Expected Result:** ✅ Full compatibility

**Issues Found:** _________________

---

### Test 17: Safari (if available)
**Steps:**
1. Open portal in Safari
2. Run through Tests 1-5 above
3. Check webkit-specific issues
4. Note any issues

**Expected Result:** ✅ Full compatibility

**Issues Found:** _________________

---

### Test 18: Edge
**Steps:**
1. Open portal in Microsoft Edge
2. Run through Tests 1-5 above
3. Check ES6 module support
4. Note any issues

**Expected Result:** ✅ Full compatibility

**Issues Found:** _________________

---

## 📊 Test Summary

**Date Tested:** _________________  
**Tester Name:** _________________  
**Browser Used:** _________________  
**OS Version:** _________________  

### Results
- Tests Passed: _____ / 18
- Tests Failed: _____
- Issues Found: _____
- Severity: ☐ Critical  ☐ Major  ☐ Minor  ☐ None

### Overall Assessment
☐ Ready for Week 2  
☐ Minor fixes needed  
☐ Major fixes required  

### Notes
_____________________________________
_____________________________________
_____________________________________

---

## 🔧 Common Issues & Solutions

### Issue: Sidebar doesn't collapse
**Solution:** Check console for JavaScript errors. Verify `sidebarCollapseBtn` element exists.

### Issue: Theme doesn't persist
**Solution:** Check if localStorage is enabled. Some browsers block it in file:// mode.

### Issue: Search modal doesn't open
**Solution:** Verify Ctrl+K handler is registered. Check for JavaScript errors.

### Issue: Layout broken on mobile
**Solution:** Check viewport meta tag. Verify CSS breakpoints in DevTools.

---

## 📝 Report Issues

If you find bugs or issues:

1. **Document the issue:**
   - What were you doing?
   - What did you expect?
   - What actually happened?
   - Browser and OS version

2. **Check console:**
   - Any error messages?
   - Network failures?

3. **Take a screenshot:**
   - Visual issues are easier to debug with images

4. **Report:**
   - Create a GitHub issue
   - Or document in `tests/ISSUES.md`

---

**Happy Testing! 🎉**
