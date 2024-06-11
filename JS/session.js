// 세션 스토리지에 데이터 저장
function setSessionItem(key, value) {
    sessionStorage.setItem(key, value);
}

// 세션 스토리지에서 데이터 가져오기
function getSessionItem(key) {
    return sessionStorage.getItem(key);
}

// 세션 스토리지에서 데이터 삭제
function removeSessionItem(key) {
    sessionStorage.removeItem(key);
}

// 모든 세션 데이터 삭제
function clearSession() {
    sessionStorage.clear();
}