document.addEventListener('DOMContentLoaded', function() {
    // 收益计算器功能
    const calculateBtn = document.getElementById('calculate-btn');
    const resultDiv = document.getElementById('calculator-result');
    
    if (calculateBtn) {
        calculateBtn.addEventListener('click', function() {
            const roofSize = parseFloat(document.getElementById('roof-size').value);
            const electricityPrice = parseFloat(document.getElementById('electricity-price').value);
            const sunlightHours = parseFloat(document.getElementById('sunlight-hours').value);
            
            // 简单计算逻辑
            // 假设每平方米可安装约0.15kW的光伏组件
            const systemCapacity = roofSize * 0.15; // 单位：kW
            
            // 每kW每天发电量 = 日照时间 * 0.8(效率因子)
            const dailyGeneration = systemCapacity * sunlightHours * 0.8; // 单位：kWh
            
            // 年发电量
            const yearlyGeneration = dailyGeneration * 365; // 单位：kWh
            
            // 传统光伏年收益
            const traditionalYearlySavings = yearlyGeneration * electricityPrice; // 单位：元
            
            // AI优化后的收益（假设提升30%）
            const aiOptimizedYearlySavings = traditionalYearlySavings * 1.3; // 单位：元
            
            // 系统成本估算（假设每kW约5000元）
            const systemCost = systemCapacity * 5000; // 单位：元
            
            // 传统回收期
            const traditionalPaybackPeriod = systemCost / traditionalYearlySavings; // 单位：年
            
            // AI优化回收期
            const aiOptimizedPaybackPeriod = systemCost / aiOptimizedYearlySavings; // 单位：年
            
            // 显示结果
            resultDiv.innerHTML = `
                <h4>您的光伏系统预估</h4>
                <p>系统容量: <strong>${systemCapacity.toFixed(2)} kW</strong></p>
                <p>年发电量: <strong>${yearlyGeneration.toFixed(2)} kWh</strong></p>
                <p>传统光伏年收益: <strong>${traditionalYearlySavings.toFixed(2)} 元</strong></p>
                <p>AI优化年收益: <strong>${aiOptimizedYearlySavings.toFixed(2)} 元</strong> (提升30%)</p>
                <p>系统投资回报期: <strong>${aiOptimizedPaybackPeriod.toFixed(1)} 年</strong> (传统系统: ${traditionalPaybackPeriod.toFixed(1)} 年)</p>
                <p>20年总收益: <strong>${(aiOptimizedYearlySavings * 20).toFixed(2)} 元</strong></p>
            `;
        });
    }
    
    // 表单提交处理
    const inquiryForm = document.getElementById('inquiry-form');
    
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const address = document.getElementById('address').value;
            const message = document.getElementById('message').value;
            
            // 在实际应用中，这里应该发送数据到服务器
            // 这里仅做演示，显示提交成功信息
            
            alert(`感谢您的咨询，${name}！我们的客服团队将在24小时内联系您。`);
            inquiryForm.reset();
        });
    }
    
    // 平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        
        if (window.scrollY > 50) {
            nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            nav.style.boxShadow = 'none';
        }
    });
});