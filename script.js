document.addEventListener('DOMContentLoaded', function() {
    // Initialize Scroll Animations
    const scrollElements = document.querySelectorAll('[data-scroll]');
    
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('is-visible');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        });
    };
    
    // Initialize on load
    handleScrollAnimation();
    
    // Add scroll event listener
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    
    // Charts
    const targetCtx = document.getElementById('targetChart').getContext('2d');
    new Chart(targetCtx, {
        type: 'doughnut',
        data: {
            labels: ['Sana\'a', 'Taiz', 'Aden', 'Ibb', 'Hodeidah', 'Dhamar'],
            datasets: [{
                data: [250, 180, 150, 70, 50, 40],
                backgroundColor: [
                    '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4'
                ],
                borderColor: '#111827',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#f0f0f0'
                    }
                },
                title: {
                    display: true,
                    text: 'Target Establishments Distribution by Governorate',
                    color: '#f0f0f0'
                }
            }
        }
    });

    const demandCtx = document.getElementById('demandChart').getContext('2d');
    new Chart(demandCtx, {
        type: 'bar',
        data: {
            labels: ['Sana\'a', 'Taiz', 'Aden', 'Ibb', 'Hodeidah', 'Dhamar'],
            datasets: [{
                label: 'Expected Machines',
                data: [5, 4, 3, 1, 1, 1],
                backgroundColor: '#3B82F6',
                borderColor: '#1E40AF',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1,
                        color: '#f0f0f0'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#f0f0f0'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#f0f0f0'
                    }
                },
                title: {
                    display: true,
                    text: 'Expected Demand by Governorate (First Year)',
                    color: '#f0f0f0'
                }
            }
        }
    });

    const priceCtx = document.getElementById('priceChart').getContext('2d');
    new Chart(priceCtx, {
        type: 'bar',
        data: {
            labels: ['Local', 'Imported (Before Customs)', 'Imported (After Customs)', 'Our Project'],
            datasets: [{
                label: 'Price in USD',
                data: [150, 16000, 22000, 6500],
                backgroundColor: ['#FCD34D', '#F87171', '#EF4444', '#10B981'],
                borderColor: ['#F59E0B', '#DC2626', '#B91C1C', '#059669'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#f0f0f0'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#f0f0f0'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Machine Price Comparison',
                    color: '#f0f0f0'
                }
            }
        }
    });

    const costCtx = document.getElementById('costChart').getContext('2d');
    new Chart(costCtx, {
        type: 'pie',
        data: {
            labels: ['Mechanical Components', 'Electrical Components', 'Control System', 'Sensors & Motors'],
            datasets: [{
                data: [2000, 1500, 800, 700],
                backgroundColor: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#f0f0f0'
                    }
                },
                title: {
                    display: true,
                    text: 'Fixed Costs Distribution',
                    color: '#f0f0f0'
                }
            }
        }
    });

    const revenueCtx = document.getElementById('revenueChart').getContext('2d');
    new Chart(revenueCtx, {
        type: 'line',
        data: {
            labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
            datasets: [{
                label: 'Conservative Scenario',
                data: [65000, 78000, 91000, 104000, 117000],
                borderColor: '#10B981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                tension: 0.1
            }, {
                label: 'Average Scenario',
                data: [97500, 120000, 142500, 165000, 187500],
                borderColor: '#3B82F6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        },
                        color: '#f0f0f0'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#f0f0f0'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#f0f0f0'
                    }
                },
                title: {
                    display: true,
                    text: '5-Year Revenue Projections',
                    color: '#f0f0f0'
                }
            }
        }
    });

    // Add floating animation to team members
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach((member, index) => {
        member.style.animation = `float 3s ease-in-out ${index * 0.2}s infinite`;
    });
});