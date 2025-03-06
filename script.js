document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 表单验证和提交处理
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            // 简单的表单验证
            if (!validateForm(formData)) {
                return;
            }

            // 模拟表单提交
            submitForm(formData);
        });
    }

    // 表单验证函数
    function validateForm(data) {
        // 验证姓名
        if (data.name.length < 2) {
            alert('请输入有效的姓名');
            return false;
        }

        // 验证手机号
        const phoneRegex = /^1[3-9]\d{9}$/;
        if (!phoneRegex.test(data.phone)) {
            alert('请输入有效的手机号码');
            return false;
        }

        // 验证邮箱
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('请输入有效的邮箱地址');
            return false;
        }

        // 验证留言内容
        if (data.message.length < 10) {
            alert('留言内容至少需要10个字符');
            return false;
        }

        return true;
    }

    // 模拟表单提交函数
    function submitForm(data) {
        // 在实际应用中，这里应该是一个API请求
        console.log('提交的表单数据:', data);
        
        // 模拟提交成功
        alert('感谢您的咨询，我们会尽快与您联系！');
        
        // 重置表单
        contactForm.reset();
    }

    // 添加滚动动画效果
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 观察所有需要动画的元素
    document.querySelectorAll('.principle-step, .benefit-card').forEach(element => {
        observer.observe(element);
    });
});