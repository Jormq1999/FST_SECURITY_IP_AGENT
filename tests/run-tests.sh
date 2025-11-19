#!/bin/bash
# Portal Testing Script
# Run comprehensive tests on the Team Information Portal

echo "🧪 Team Information Portal - Test Suite"
echo "========================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test counters
TOTAL_TESTS=0
PASSED_TESTS=0
FAILED_TESTS=0

# Function to run a test
run_test() {
    TOTAL_TESTS=$((TOTAL_TESTS + 1))
    TEST_NAME=$1
    TEST_CMD=$2
    
    echo -n "Testing: $TEST_NAME... "
    
    if eval $TEST_CMD > /dev/null 2>&1; then
        echo -e "${GREEN}✅ PASS${NC}"
        PASSED_TESTS=$((PASSED_TESTS + 1))
    else
        echo -e "${RED}❌ FAIL${NC}"
        FAILED_TESTS=$((FAILED_TESTS + 1))
    fi
}

# Navigate to project root
cd "$(dirname "$0")/.." || exit 1

echo "📋 Phase 1: File Structure Tests"
echo "--------------------------------"

# Test file existence
run_test "index.html exists" "test -f index.html"
run_test "main.css exists" "test -f assets/css/main.css"
run_test "components.css exists" "test -f assets/css/components.css"
run_test "themes.css exists" "test -f assets/css/themes.css"
run_test "app.js exists" "test -f assets/js/app.js"
run_test "navigation.js exists" "test -f assets/js/navigation.js"
run_test "search.js exists" "test -f assets/js/search.js"
run_test "chat.js exists" "test -f assets/js/chat.js"
run_test "theme.js exists" "test -f assets/js/theme.js"

echo ""
echo "📄 Phase 2: HTML Validation"
echo "---------------------------"

# Check HTML structure
run_test "HTML has DOCTYPE" "grep -q '<!DOCTYPE html>' index.html"
run_test "HTML has lang attribute" "grep -q '<html lang=' index.html"
run_test "HTML has charset meta" "grep -q 'charset=' index.html"
run_test "HTML has viewport meta" "grep -q 'viewport' index.html"
run_test "HTML has title" "grep -q '<title>' index.html"

echo ""
echo "🎨 Phase 3: CSS Validation"
echo "-------------------------"

# Check CSS structure
run_test "CSS has :root variables" "grep -q ':root' assets/css/main.css"
run_test "CSS has color variables" "grep -q 'color-primary' assets/css/main.css"
run_test "CSS has font variables" "grep -q 'font-family-primary' assets/css/main.css"
run_test "CSS has spacing variables" "grep -q 'space-' assets/css/main.css"
run_test "CSS has dark theme" "grep -q 'data-theme.*dark' assets/css/main.css"

echo ""
echo "⚡ Phase 4: JavaScript Validation"
echo "--------------------------------"

# Check JavaScript structure
run_test "app.js has App object" "grep -q 'const App' assets/js/app.js"
run_test "navigation.js has Navigation object" "grep -q 'const Navigation' assets/js/navigation.js"
run_test "search.js has Search object" "grep -q 'const Search' assets/js/search.js"
run_test "chat.js has Chat object" "grep -q 'const Chat' assets/js/chat.js"
run_test "theme.js has Theme object" "grep -q 'const Theme' assets/js/theme.js"

echo ""
echo "📁 Phase 5: Directory Structure"
echo "-------------------------------"

# Check folders exist
run_test "assets/css/ exists" "test -d assets/css"
run_test "assets/js/ exists" "test -d assets/js"
run_test "assets/images/ exists" "test -d assets/images"
run_test "assets/fonts/ exists" "test -d assets/fonts"
run_test "content/ exists" "test -d content"
run_test "content/architecture/ exists" "test -d content/architecture"
run_test "content/designers/ exists" "test -d content/designers"
run_test "content/validators/ exists" "test -d content/validators"
run_test "content/training/ exists" "test -d content/training"
run_test "content/repositories/ exists" "test -d content/repositories"

echo ""
echo "🔍 Phase 6: Content Checks"
echo "-------------------------"

# Check for key content
run_test "Header component exists" "grep -q '<header' index.html"
run_test "Sidebar component exists" "grep -q '<aside.*sidebar' index.html"
run_test "Main content area exists" "grep -q '<main' index.html"
run_test "Chat panel exists" "grep -q 'chatPanel' index.html"
run_test "Footer component exists" "grep -q '<footer' index.html"
run_test "Search modal exists" "grep -q 'searchModal' index.html"

echo ""
echo "🎯 Phase 7: Feature Checks"
echo "-------------------------"

# Check for key features
run_test "Theme toggle exists" "grep -q 'themeToggle' index.html"
run_test "Search trigger exists" "grep -q 'searchTrigger' index.html"
run_test "Sidebar toggle exists" "grep -q 'sidebarToggle' index.html"
run_test "Chat input exists" "grep -q 'chatInput' index.html"
run_test "Architecture menu exists" "grep -q 'Architecture' index.html"

echo ""
echo "========================================"
echo "📊 Test Results Summary"
echo "========================================"
echo "Total Tests: $TOTAL_TESTS"
echo -e "Passed: ${GREEN}$PASSED_TESTS${NC}"
echo -e "Failed: ${RED}$FAILED_TESTS${NC}"

COVERAGE=$((PASSED_TESTS * 100 / TOTAL_TESTS))
echo "Coverage: $COVERAGE%"

echo ""
if [ $FAILED_TESTS -eq 0 ]; then
    echo -e "${GREEN}✅ All tests passed!${NC}"
    exit 0
else
    echo -e "${YELLOW}⚠️  Some tests failed. Please review.${NC}"
    exit 1
fi
